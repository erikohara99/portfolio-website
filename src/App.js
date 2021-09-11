import React from 'react';
import './App.css';
import Header from "./components/Header"
import Splash from "./components/Splash"
import About from "./components/About"
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Splash />
      <About />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
}

export default App;
