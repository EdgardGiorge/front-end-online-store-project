import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

  handleBtnClick = (operator, product) => {
    const { newProducts } = this.state;
    const spreadProd = [...newProducts];
    const indexToDrop = newProducts.findIndex((prod) => prod.id === product.id);
    if (operator === '+') {
      product.quantity += 1;
    } else {
      product.quantity -= 1;
    }
    spreadProd[indexToDrop] = product;
    this.setState({
      newProducts: [...spreadProd],
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
              newProducts.map((product) => (
                <div key={ product.id }>
                  <p data-testid="shopping-cart-product-name">{product.title}</p>
                  <img src={ product.thumbnail } alt={ product.title } />
                  <p>
                    R$
                    {' '}
                    {product.price}
                  </p>
                  <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    onClick={ () => this.handleBtnClick('-', product) }
                  >
                    -
                  </button>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={ () => this.handleBtnClick('+', product) }
                  >
                    +
                  </button>
                </div>
              ))
            )
        }
        <Link
          to={ { pathname: '/Checkout' } }
          data-testid="checkout-products"
        >
          Finalizar
        </Link>
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
