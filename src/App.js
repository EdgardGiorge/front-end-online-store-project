import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import PrimeiraTela from './components/PrimeiraTela';
import Cart from './components/Cart';
import Categorias from './components/Categorias';
import ProductsContainer from './components/ProductsContainer';
import { getProductsFromCategoryAndQuery } from './services/api';
import TextFilter from './components/TextFilter';

class App extends React.Component {
  state= {
    products: [],
  }

  onCatBtnClick = (catFilter) => {
    this.fetchProducts(catFilter);
  };

  onQueryBtnClick = (query) => {
    this.fetchProducts(undefined, query);
  }

  fetchProducts = async (catFilter, queryFilter) => {
    const resposta = await getProductsFromCategoryAndQuery(catFilter, queryFilter);
    const { results } = await resposta;
    this.setState({
      products: results,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={ PrimeiraTela } />
          <Route path="/Cart" component={ Cart } />
          <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        </BrowserRouter>
        <Categorias onCatBtnClick={ this.onCatBtnClick } />
        <TextFilter onQueryBtnClick={ this.onQueryBtnClick } />
        <ProductsContainer products={ products } />
      </div>
    );
  }
}
export default App;
