import React from 'react';

import Navbar from './Components/navbar.jsx';
import SummerSale from './Components/SummerSaleHero';
import Categories from './Components/Categories';
import Footer from './Components/Footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Components/Pages/AboutUs';












function App() {
  return (
    <div>
      <div className="App">
      <Navbar/>
      <Routes>
   
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      </div>
      <SummerSale/>
      <Categories/>
      <Footer/>
     
      
    </div>

    
      
  );
}
export default App;


