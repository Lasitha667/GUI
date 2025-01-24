import React from 'react';


import Footer from '../Footer/Footer.jsx';
import Banner from '../Banner/Banner.jsx';
import Moving from '../Moving Bar/Moving.jsx';
import Cards from '../Cards/Cards.jsx';
import Slider from '../ImageSlider/ImageSlider.jsx';
import Features from '../BottomInfo/bottominfo.jsx';
import DeliveryBar from '../Deliverybar/Deliverybar.jsx'

function Home(){
    return (
        <div>
           
          
           
          <Slider/>
          <Moving/>
          <DeliveryBar/>
          <Banner/>
          <Cards/>
          <Features/>
         
          
          
          
          
          
        
         
          
        </div>
    
        
          
      );
} export default Home;