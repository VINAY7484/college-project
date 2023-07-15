import React from 'react';
// import { BrowserRouter,Routes,Route  } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Home from './components/Home/Home';
// import Api from "./components/Api";
import Form from './components/Home/Form';
import NavBar from './components/Home/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    
      <Header/>
      {/* <Api/> */}
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
