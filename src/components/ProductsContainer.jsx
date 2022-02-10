import React from 'react';
import PropTypes from 'prop-types';

class ProductsContainer extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => (
          <div data-testid="product" key={ product.id }>
            <span>{product.title}</span>
            <span>{product.price}</span>
            <img src={ product.thumbnail } alt="" />
          </div>
        ))}
      </div>
    );
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired };

export default ProductsContainer;
