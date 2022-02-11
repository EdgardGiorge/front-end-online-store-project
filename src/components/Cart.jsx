import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { productsByQuanty } from '../services/api';

class Cart extends Component {
  state = {
    newProducts: [],
  }

  componentDidMount() {
    this.setState({ newProducts: productsByQuanty() });
    // if (localStorage.bycart) {
    //   const produto = JSON.parse(localStorage.getItem('bycart'));
    //   this.setState({ newProducts: produto });
    // }
  }

  handleBtnClick = (e, currProdId) => {
    const { newProducts } = this.state;
    let indexToDrop;
    const currentProduct = newProducts.find(({ id }, index) => {
      if (id === currProdId) {
        indexToDrop = index;
        return true;
      }
      return false;
    });
    if (e.target.innerText === '+') {
      currentProduct.quantity += 1;
    } else {
      currentProduct.quantity -= 1;
    }
    newProducts[indexToDrop] = currentProduct;
    this.setState({
      newProducts,
    });
  }

  render() {
    const { newProducts } = this.state;
    return (
      <div>
        {
          newProducts.length === 0
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : (
              newProducts.map(({ title, thumbnail, price, id, quantity }) => (
                <div key={ id }>
                  <p data-testid="shopping-cart-product-name">{title}</p>
                  <img src={ thumbnail } alt={ title } />
                  <p>
                    R$
                    {' '}
                    {price}
                  </p>
                  <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    onClick={ (e) => this.handleBtnClick(e, id) }
                  >
                    -
                  </button>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={ (e) => this.handleBtnClick(e, id) }
                  >
                    +
                  </button>
                </div>
              ))
            )
        }
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      bycart: PropTypes.string,
    }),
  }).isRequired,
};

export default Cart;
