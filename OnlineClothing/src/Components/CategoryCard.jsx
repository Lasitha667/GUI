import React from 'react';
import styles from './Categories.module.css';

const CategoryCard = ({ imageSrc, title }) => {
  return (
    <div className={styles.categoryCard}>
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} category`}
        className={styles.categoryImage}
      />
      <div className={styles.borderTop} />
      <div className={styles.categoryTitle}>{title}</div>
      <div className={styles.borderBottom} />
    </div>
  );
};

export default CategoryCard;