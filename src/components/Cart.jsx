import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  state = {
    newProducts: [],
  }

  componentDidMount() {
    if (localStorage.bycart) {
      const produto = JSON.parse(localStorage.getItem('bycart'));
      this.setState({ newProducts: produto });
    }
  }

  render() {
    const { newProducts } = this.state;
    return (
      <div>
        {
          newProducts.length === 0
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : (
              newProducts.map(({ title, thumbnail, price, id }) => (
                <div key={ id }>
                  <p data-testid="shopping-cart-product-name">{title}</p>
                  <img src={ thumbnail } alt={ title } />
                  <p>
                    R$
                    {' '}
                    {price}
                  </p>
                  <p data-testid="shopping-cart-product-quantity">1</p>
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
