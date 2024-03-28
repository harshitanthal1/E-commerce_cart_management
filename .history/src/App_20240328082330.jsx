import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Cart from './components/Cart.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

