import React from 'react';
import NavigationLinks from './NavigationLinks';
import styles from './Navigation.module.css';
import searchsty from '.'

const Navigation = () => {
  const mainNavLinks = ['Home', 'ACCESSORIES', 'About Us', 'DROPS'];
  const secondaryNavLinks = [];

  return (
    <header className={styles.header}>
      <div className={styles.brandSection}>
        <h1 className={styles.brandName}>MonaModa</h1>
        <div className={styles.divider} />
        <NavigationLinks links={mainNavLinks} />
      </div>
      <div className={styles.actionSection}>
        <NavigationLinks links={secondaryNavLinks} />
        <div className={styles.utilitySection}>
          <div className={styles.blogWrapper}>
            
          </div>
          <div className='search-bar'>
          <input type="text" placeholder="Search..." />
        </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8593e0ff38923ec68851e3dd1ca67694dee91746a41e3397db03d855bc74e7ab?placeholderIfAbsent=true&apiKey=c2fc95f0055440488c382d41de291f5d"
            className={styles.cartIcon}
            alt="Shopping cart"
          />
        </div>
      </div>
    </header>
  );
};

export default Navigation;