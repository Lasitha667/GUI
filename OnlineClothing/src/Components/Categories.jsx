import React from 'react';
import CategoryCard from './CategoryCard';
import styles from './Categories.module.css';
import Hoodies from'../assets/exclusive-mockups-branding-packaging-design-260nw-1932288902.jpg';
import Shirts from'../assets/360_F_624605814_OA34oXG5ORsvoZcURk1KAK5YylIWSO4O.jpg';
import Jacket from'../assets/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vNmZiNWVlZWItMjljZS00N2Y3LTllZmMtYTQ4NWE4ZWU4NjhjLmpwZWc.jpg'
import Bottoms from'../assets/4-6-680x920.jpg';


const categoryData = [
  { imageSrc: Bottoms, title: 'BOTTOMS' },
  { imageSrc: Jacket, title: 'JACKETS' },
  { imageSrc: Shirts, title: 'SHIRTS' },
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