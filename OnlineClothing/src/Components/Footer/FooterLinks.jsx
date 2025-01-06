import React from 'react';
import styles from './Footer.module.css';

const FooterLinks = ({ title, links }) => {
  return (
    <div className={styles.linkSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.linkList}>
        {links.map((link, index) => (
          <a href="#" className={styles.link} key={index} tabIndex="0">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;