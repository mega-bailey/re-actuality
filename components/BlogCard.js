import Link from 'next/link';
import styles from '@/styles/BlogCard.module.css';

export default function BlogPost({
  title,
  author,
  postPhoto,
  datePublished,
  slug,
}) {
  //BLOG CARD ON HOME PAGE
  return (
    <div className={styles.cardContainer}>
      <Link href={'/posts/' + slug}>
        <div className={styles.cardImgContainer}>
          <img src={postPhoto.url} alt='' className={styles.cardImg} />
        </div>
        <div className={styles.cardDetails}>
          <div className={styles.cardDetailsTopHalf}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <div className={styles.cardDescription}>Desc needs to go here</div>
          </div>
          <div className={styles.cardDetailsBottomHalf}>
            <div className={styles.cardAuthorDetails}>
              <div className={styles.cardAuthorImage}>
                <img src={author.avatar.url} alt={author.name} />
              </div>
              <div>
                <p className={styles.cardAuthorName}>{author.name}</p>
                <p className={styles.cardAuthorDate}>{datePublished}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
