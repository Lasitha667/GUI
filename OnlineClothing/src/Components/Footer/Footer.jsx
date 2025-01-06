import React from 'react';
import FooterLinks from './FooterLinks';
import styles from './Footer.module.css';

const Footer = () => {
  const menuLinks = ['Home', 'Complains', 'About Us'];
  const categoryLinks = ['Bottoms', 'Jackets', 'Shirts', 'Hoodies'];
  const socialLinks = ['Instagram', 'Twitter', 'Youtube', 'Facebook'];

const ColorLine = ({color}) =>(
  <hr style={{color:color, backgroundColor:color, height:2}}/>
)

  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.brandContainer}>
          <div className={styles.brandName}> </div>
        </div>
        <ColorLine color='orange'/>
        <div className={styles.linksContainer}>
          <div className={styles.linksWrapper}>
            <FooterLinks title="Menu" links={menuLinks} />
            <FooterLinks title="Categories" links={categoryLinks} />
            <FooterLinks title="Social" links={socialLinks} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;