import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Navbar from './Components/Navbar';



ReactDOM.render(
  <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<App />}> 
     
      <Route path='home' element={<Home />} /> 
      <Route path='about' element={<About />} /> 
      <Route path='contact' element={<Contact />} /> 
      <Route path='services' element={<Services />} /> 
      </Route>
      
      
      </Routes>
  </BrowserRouter>
  ,document.getElementById("root")
 
);


reportWebVitals();
