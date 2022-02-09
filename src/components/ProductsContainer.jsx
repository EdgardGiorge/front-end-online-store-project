import { render } from '@testing-library/react';
import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductsContainer extends React.Component {
  componentDidMount() {
    this.fetchProducts(
    );
  }

    fetchProducts = async () => {
      const categoryId = this.props;
      const response = await getProductsFromCategoryAndQuery(categoryId, query);
      this.setState({
        products: response,
      });
    };

    render() {
      const { products } = this.state;
      return (
        <div>
          {products.map((product) => (product.name))}
        </div>
      );
    }
}

export default ProductsContainer;
