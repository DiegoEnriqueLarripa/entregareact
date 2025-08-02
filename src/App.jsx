import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Hero />
        <ItemListContainer greeting="Nuestros Productos" />
      </main>
      <Footer />
    </div>
  );
}

export default App;