import React, { Component } from 'react';

class Cart extends Component {
  render() {
    /* const { cart } = this.props; */
    return (
      <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      /* { cart.length === 0 ? <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span> : (

      ) */

    );
  }
}
export default Cart;
