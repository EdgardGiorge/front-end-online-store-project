import React from 'react';
import { getProductsFromId } from '../services/api';

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
    console.log(productInfo);
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

export default ProductDetails;
