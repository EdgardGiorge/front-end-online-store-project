import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getProductsFromId, addProduct } from '../services/api';

class ProductDetails extends React.Component {
  state= {
    productInfo: {},
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductsFromId(id);
    this.setState({
      productInfo: product,
    });
  }

  render() {
    const { productInfo } = this.state;
    return (
      <div className="teste">
        <span data-testid="product-detail-name">{productInfo.title}</span>
        <span>{productInfo.id}</span>
        <span>{productInfo.price}</span>
        <img src={ productInfo.thumbnail } alt="" />
      </div>
    );
  }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
export default ProductDetails;
