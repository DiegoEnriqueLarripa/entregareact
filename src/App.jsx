import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import RouteFade from './components/RouteFade';
import Banners from './components/Banners';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <RouteFade>
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Hero />
                  <Banners />
                  <ItemListContainer />
                </>
              )}
            />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<h2 style={{ textAlign: 'center', margin: '2rem 0' }}>404 - Página no encontrada</h2>} />
          </Routes>
        </RouteFade>
      </main>
      <Footer />
    </div>
  );
}

export default App;