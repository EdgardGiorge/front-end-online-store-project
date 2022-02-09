import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import PrimeiraTela from './components/PrimeiraTela';
import Cart from './components/Cart';
import Categorias from './components/Categorias';
import ProductsContainer from './components/ProductsContainer';

class App extends React.Component {
  state = {
    catFilter: '',
  }

  onCatBtnClick = (e) => {
    const { name } = e.target;
    this.setState({
      catFilter: name,
    });
  };

  render() {
    const { catFilter } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={ PrimeiraTela } />
          <Route path="/Cart" component={ Cart } />
          <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        </BrowserRouter>
        <Categorias onCatBtnClick={ this.onCatBtnClick } />
        <ProductsContainer catFilter={ catFilter } />
      </div>
    );
  }
}
export default App;
