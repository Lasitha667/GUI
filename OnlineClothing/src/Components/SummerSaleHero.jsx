import * as React from "react";
import styles from './SummerSaleHero.module.css';
import SummerSale from '../assets/blue-aesthetic-mens-fashion-bncfzboi26coh5qq.jpg'

export default function SummerSaleHero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <img
          loading="lazy"
         src={SummerSale}
          className={styles.heroBackground}
          alt="Summer sale background"
        />
        <h1 className={styles.heroTitle}>Summer sale</h1>
        <div className={styles.contentWrapper}>
          <p className={styles.description}>
            Special Sales on New Year Event
          </p>
          <p className={styles.description2}>New 
            <br/>Collecton
            <br />
            Available </p>
          <button 
            className={styles.ctaButton}
            onClick={() => {}}
            tabIndex="0"
            aria-label="Shop here for summer sale items"
          >
            SHOP HERE
          </button>
        </div>
      </div>
    </div>
  );
}