import React from 'react';

import Navbar from './Components/navbar';
import SummerSale from './Components/SummerSaleHero';
import Categories from './Components/Categories';
import Footer from './Components/Footer/Footer.jsx';
import ContactUs from './Components/Pages/ContactUs.jsx';
import AboutUs from './Components/Pages/AboutUs.jsx';
import NewArrivals from './Components/Pages/NewArrivals.jsx'












function App() {
  let component ;
  switch (window.location.pathname) {
    case "/about":
      component = <AboutUs/>;
      break
      case "/contact":
        component = <ContactUs/>;
        break
        case "/arrivals":
          component = <NewArrivals/>;
          break
   
  }

  return (
    <div>
      

      <><Navbar/>
      <component/>
      </>
      

      
      <SummerSale/>
      <Categories/>
      <Footer/>
     
      
    </div>

    
      
  );
}
export default App;


