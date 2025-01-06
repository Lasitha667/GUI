import * as React from "react";
import styles from './SummerSaleHero.module.css';

export default function SummerSaleHero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/245d2072fa618747e56ed78c411f863b091aac8443e88897b1d40c62db9cc758?placeholderIfAbsent=true&apiKey=c2fc95f0055440488c382d41de291f5d"
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