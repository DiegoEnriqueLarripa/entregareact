import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Hero />
                <ItemListContainer />
              </>
            )}
          />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2 style={{ textAlign: 'center', margin: '2rem 0' }}>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;