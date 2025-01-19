import React from 'react';
import SummerSale from '../SummerSaleHero';

import Footer from '../Footer/Footer.jsx';
import Banner from '../Banner/Banner.jsx';
import Moving from '../Moving Bar/Moving.jsx';
import Cards from '../Cards/Cards.jsx';
function Home(){
    return (
        <div>
           
          <Banner/>
          <Moving/>
          <SummerSale/>
          <Cards/>
          <Footer/>
         
          
        </div>
    
        
          
      );
} export default Home;