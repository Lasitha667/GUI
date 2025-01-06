import React from 'react';
import styles from './Navigation.module.css';

const NavigationLinks = ({ links }) => {
  return (
    <nav className={styles.navigationLinks}>
      {links.map((link, index) => (
        <a 
          key={index} 
          href={`/${link.toLowerCase()}`}
          className={styles.navLink}
          tabIndex="0"
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavigationLinks;