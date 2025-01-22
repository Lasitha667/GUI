import React from 'react';
import Home from './Components/Pages/Home.jsx'
import Navbar from './Components/navbar.jsx';
import Footer from './Components/Footer/Footer.jsx'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import About from './Components/Pages/AboutUs.jsx'
import Login from './Components/Pages/Login page/Login.jsx'
import SighUp from './Components/Pages/SighUp/signup.jsx';













function App() {
 

  return (
   <div>
    <Navbar/>
    <div>
      <Routes>
        <Route path ="/" element ={<Home/>} />
        <Route path ="/about" element ={<About/>} />
        
        <Route path ="/login" element ={<Login/>} />
        <Route path ="/sighup" element ={<SighUp/>} />
      
      
        
       
        
      </Routes>
      <Footer/>
    </div>
    
 
   </div>
  

    
      
  );
}
export default App;


