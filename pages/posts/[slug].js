import styles from '@/styles/Slug.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const graphcms = new GraphQLClient(
  'https://api-us-west-2.hygraph.com/v2/clni13m5a8vdl01uh5yr0hzbl/master'
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      postPhoto {
        id
        url
      }
    }
  }
`;

//Query all post slugs
const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

//Get all slug paths
export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  //INDIVIDUAL BLOG PAGE
  return (
    <>
      <Navbar />
      <main className={styles.blog}>
        <div className={styles.blogHero}>
          <div className={styles.blogHeroText}>
            <h2 className={styles.blogHeroTitle}>{post.title}</h2>
          </div>
          <div className={styles.blogHeroImage}>
            <img
              src={post.postPhoto.url}
              className={styles.blogPhoto}
              alt={post.title}
            />
          </div>
        </div>
        <div className={styles.cardAuthorContainer}>
          <div className={styles.authtext}>
            <p>By {post.author.name}</p>
            <p className={styles.date}>{post.datePublished}</p>
          </div>
          <div className={styles.cardAuthorImage}>
            <img src={post.author.avatar.url} alt='' />
          </div>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        ></div>
      </main>
      <Footer />
    </>
  );
}
