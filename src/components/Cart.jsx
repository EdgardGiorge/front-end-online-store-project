import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  render() {
    const { location: { state: { cart } } } = this.props;
    return (
      <div>
        {cart.length > 0 ? (cart.map((item) => (
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">
              {item.title}
            </p>
            <p data-testid="shopping-cart-product-quantity">
              {item.quantity}
            </p>
          </div>)))
          : (
            <span
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </span>)}
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.string,
    }),
  }).isRequired,
};

export default Cart;
