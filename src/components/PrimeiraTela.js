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

  checkRepeated = (cart, newProduct) => {
    let found = false;
    cart.forEach((item, index) => {
      if (item.title === newProduct.title) {
        item.quantity += 1;
        const newCart = cart;
        newCart[index] = item;
        this.setState({
          cart: newCart,
        });
        found = true;
      }
    });
    return found;
  }

  addCart = (newProduct) => {
    const { cart } = this.state;
    const isRepeated = this.checkRepeated(cart, newProduct);
    if (!isRepeated) {
      newProduct.quantity = 1;
      this.setState(({ cart: previousList }) => (
        { cart: [...previousList, newProduct] }));
    }
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
    const { products, cart } = this.state;
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <Link
          to={ { pathname: '/Cart', state: { cart } } }
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <div>
          <Categorias onCatBtnClick={ this.onCatBtnClick } />
          <TextFilter onQueryBtnClick={ this.onQueryBtnClick } />
          <ProductsContainer
            products={ products }
            addCart={ this.addCart }
          />
          {/* <Cart> */}
        </div>
      </h1>
    );
  }
}

export default PrimeiraTela;
