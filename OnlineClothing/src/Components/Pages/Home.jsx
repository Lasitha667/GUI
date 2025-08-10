import React from 'react';



import Banner from '../Banner/Banner.jsx';
import Moving from '../MovingUpper/MovingUpper.jsx';
import Cards from '../Cards/Cards.jsx';
import Slider from '../ImageSlider/ImageSlider.jsx';
import Features from '../BottomInfo/bottominfo.jsx';
import Customer from '../Customerfeedback/customer.jsx';
import Instagram from '../Instsafollow/insta.jsx';
function Home(){
    return (
        <div>
           
          
           
          <Slider/>
          <Moving/>
          
          <Banner/>
          <Customer/>
          <Instagram/>
          <Features/>
         
          
          
          
          
          
        
         
          
        </div>
    
        
          
      );
} export default Home;