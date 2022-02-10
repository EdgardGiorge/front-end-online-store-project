import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromId } from '../services/api';

class ProductDetails extends React.Component {
  state = {
    product: {
      attributes: [],
    },
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductsFromId(id);
    this.setState({ product });
  }

  render() {
    const { product: { title, price, thumbnail, attributes } } = this.state;
    return (
      <div className="teste">
        <span data-testid="product-detail-name">{title}</span>
        <img src={ thumbnail } alt="" />
        <p>{`R$ ${price}`}</p>
        <table>
          {
            attributes.map(({ name, value_name: valueName, id }) => (
              <h3 key={ id }>
                <p>{name}</p>
                <p>{valueName}</p>
              </h3>
            ))
          }
        </table>

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
