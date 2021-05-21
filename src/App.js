import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import AboutMe from "./pages/AboutMe";
//import Contact from "./pages/Contact";
//import Portfolio from "./pages/Portfolio";
//import NavBar from "./components/NavBar/NavBar";
//import Footer from "./components/Footer";
//import Wrapper from "./components/Wrapper/Wrapper";
import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <About />
    </Router>
    
  );
}

export default App;
