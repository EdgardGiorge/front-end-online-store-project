import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import './App.css';
import PrimeiraTela from './components/PrimeiraTela';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/Cart" component={ Cart } />
            <Route exact path="/Productdetails/:id" component={ ProductDetails } />
            <Route exact path="/" component={ PrimeiraTela } />
          </Switch>
          <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        </BrowserRouter>

      </div>
    );
  }
}
export default App;
