import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import './App.css';
import PrimeiraTela from './components/PrimeiraTela';
import Cart from './components/Cart';
import Categorias from './components/Categorias';
import ProductsContainer from './components/ProductsContainer';
import { getProductsFromCategoryAndQuery } from './services/api';
import TextFilter from './components/TextFilter';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  state= {
    products: [],
    productSelected: '',
  }

  handleLinkClick = (index) => {
    this.setState({
      productSelected: index,
    });
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
    const { products, productSelected } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/Cart" component={ Cart } />
            <Route exact path="/Productdetails">
              <ProductDetails product={ products[productSelected] } />
            </Route>
            <Route exact path="/" component={ PrimeiraTela } />
          </Switch>
          <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        </BrowserRouter>

        <div>
          <Categorias onCatBtnClick={ this.onCatBtnClick } />
          <TextFilter onQueryBtnClick={ this.onQueryBtnClick } />
          <ProductsContainer products={ products } handleLinkClick={ this.handleLinkClick } />
        </div>
      </div>
    );
  }
}
export default App;
