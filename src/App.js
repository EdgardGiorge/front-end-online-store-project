import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import PrimeiraTela from './components/PrimeiraTela';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ PrimeiraTela } />
        <Route path="/Cart" component={ Cart } />
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>

      </BrowserRouter>
    </div>
  );
}

export default App;
