import React from 'react';
import { Link } from 'react-router-dom';
import Categorias from './Categorias';
import ProductsContainer from './ProductsContainer';
import { getProductsFromCategoryAndQuery } from '../services/api';
import TextFilter from './TextFilter';

class PrimeiraTela extends React.Component {
  state= {
    products: [],
    cart: [],
  }

  addCart = (newProduct) => {
    this.setState(({ cart: previousList }) => (
      { cart: [...previousList, newProduct] }));
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
    const { products, addCart } = this.state;
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        <div>
          <Categorias onCatBtnClick={ this.onCatBtnClick } />
          <TextFilter onQueryBtnClick={ this.onQueryBtnClick } />
          <ProductsContainer
            products={ products }
            addCart={ addCart }
          />
          {/* <Cart> */}
        </div>
      </h1>
    );
  }
}

export default PrimeiraTela;
