import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popup from './Home/Popup';
import Home from './Home/Home';
import Productpage from './Product-Page/Productpage';
import Register from './Register/Register';
import Loginpage from './Login/Loginpage';
import Contactpage from './Contact/Contactpage';
import Header from './Home/Header/Header';
import Footer from './Home/Footer/Footer';
import Load from './Home/Load';
import Forgot from './Login/Forgot';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Load />;
  }

  return (
    <>
     <Popup/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Productpage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Loginpage />} />
          <Route path="/Contact" element={<Contactpage />} />
          <Route path='/Forgot' element={<Forgot/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
