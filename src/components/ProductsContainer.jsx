import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductsContainer extends React.Component {
  render() {
    const { products, addCart } = this.props;
    return (
      <div>
        {products.map((product) => (
          <div data-testid="product" key={ product.id }>
            <span>{product.title}</span>
            <span>{product.price}</span>
            <img src={ product.thumbnail } alt="" />
            <Link
              data-testid="product-detail-link"
              to={ `/Productdetails/${product.id}` }
            >
              Detalhar

            </Link>
            <button
              data-testid="product-add-to-cart"
              type="button"
              onClick={ () => addCart(product) }
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ProductsContainer.propTypes = {
  addCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired };

export default ProductsContainer;
