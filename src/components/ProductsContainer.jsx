import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';

class ProductsContainer extends React.Component {
  render() {
    const { products, handleLinkClick } = this.props;
    return (
      <div>
        {products.map((product, index) => (
          <div data-testid="product" key={ product.id }>
            <span>{product.title}</span>
            <span>{product.price}</span>
            <img src={ product.thumbnail } alt="" />
            <BrowserRouter>
              <Link onClick={ () => handleLinkClick(index) } to="/Productdetails">Detalhar</Link>
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
