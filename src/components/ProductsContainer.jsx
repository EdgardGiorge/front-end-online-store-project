import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductsContainer extends React.Component {
    state = {
      products: [],
    }

    componentDidMount() {
      this.fetchProducts(
      );
    }

    fetchProducts = async () => {
      const categoryId = this.props;
      const response = await getProductsFromCategoryAndQuery(categoryId);
      const { results } = response;
      this.setState({
        products: results,
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
