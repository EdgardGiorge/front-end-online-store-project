import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import PrimeiraTela from './components/PrimeiraTela';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/Cart" component={ Cart } />
            <Route exact path="/Productdetails/:id" component={ ProductDetails } />
            <Route exact path="/" component={ PrimeiraTela } />
            <Route exact path="/Checkout" component={ Checkout } />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}
export default App;
