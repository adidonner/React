import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import Menu from './layout/Menu';

function App() {
  return (
    <> 
      {/* fragment */}
      <Header />
      <Menu />
      <Main />
      <Footer />
    </>
  );
}

export default App;
