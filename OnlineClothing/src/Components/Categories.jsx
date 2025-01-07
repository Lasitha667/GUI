import React from 'react';
import CategoryCard from './CategoryCard';
import styles from './Categories.module.css';
import Hoodies from'../assets/download.jpg';


const categoryData = [
  { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/378da54db76a2da1d7f09b9ee01f507b58112c9a9e9c40eed44399255bd30c95?placeholderIfAbsent=true&apiKey=c2fc95f0055440488c382d41de291f5d', title: 'BOTTOMS' },
  { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dd4e528ce66e1808859941c6418ea43724e2e231d7fb8b8be3b93792079a51d7?placeholderIfAbsent=true&apiKey=c2fc95f0055440488c382d41de291f5d', title: 'JACKETS' },
  { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fd5ecbbb59ec7f5ee6e16704fed7b39dc19440d2f6e0dc1d7d5c7b1695409aaa?placeholderIfAbsent=true&apiKey=c2fc95f0055440488c382d41de291f5d', title: 'SHIRTS' },
  { imageSrc: Hoodies, title: 'HOODIES' }
];

const Categories = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>TOP CATEGORIES</h1>
      <div className={styles.headingUnderline} />
      <div className={styles.categoryGrid}>
        {categoryData.map((category, index) => (
          <div key={index} className={styles.categoryColumn}>
            <CategoryCard
              imageSrc={category.imageSrc}
              title={category.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;