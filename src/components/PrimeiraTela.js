import React from 'react';
import Categorias from './Categorias';
import ProductsContainer from './ProductsContainer';
import { getProductsFromCategoryAndQuery } from '../services/api';
import TextFilter from './TextFilter';

class PrimeiraTela extends React.Component {
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
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <div>
          <Categorias onCatBtnClick={ this.onCatBtnClick } />
          <TextFilter onQueryBtnClick={ this.onQueryBtnClick } />
          <ProductsContainer
            products={ products }
            handleLinkClick={ this.handleLinkClick }
          />
        </div>
      </h1>
    );
  }
}

export default PrimeiraTela;
