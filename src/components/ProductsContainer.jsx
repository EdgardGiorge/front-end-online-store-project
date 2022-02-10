import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

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
            <BrowserRouter>
              <Link to="/productdetails">Detalhar</Link>
            </BrowserRouter>
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
