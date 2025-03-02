import React from 'react';



import Banner from '../Banner/Banner.jsx';
import Moving from '../MovingUpper/MovingUpper.jsx';
import Cards from '../Cards/Cards.jsx';
import Slider from '../ImageSlider/ImageSlider.jsx';
import Features from '../BottomInfo/bottominfo.jsx';
import DeliveryBar from '../Deliverybar/Deliverybar.jsx'

function Home(){
    return (
        <div>
           
          
           
          <Slider/>
          <Moving/>
          
          <Banner/>
          <Cards/>
          <Features/>
         
          
          
          
          
          
        
         
          
        </div>
    
        
          
      );
} export default Home;