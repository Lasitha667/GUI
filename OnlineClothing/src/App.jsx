import React from 'react';
import Home from './Components/Pages/Home.jsx'
import Navbar from './Components/navbar.jsx';
import Footer from './Components/Footer/Footer.jsx'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import About from './Components/Pages/AboutUs.jsx'











function App() {
 

  return (
   <div>
    <Navbar/>
    <div>
      <Routes>
        <Route path ="/" element ={<Home/>} />
        <Route path ="/About" element ={<About/>} />
      </Routes>
    </div>
    
 
   </div>
  

    
      
  );
}
export default App;


