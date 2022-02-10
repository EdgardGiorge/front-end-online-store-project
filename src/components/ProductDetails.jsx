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
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={ thumbnail } alt="" />
        <p>{`R$ ${price}`}</p>
        <table>
          {
            attributes.map(({ name, value_name: valueName, id }) => (
              <thead key={ id }>
                <tr>
                  <th>{name}</th>
                  <th>{valueName}</th>
                </tr>
              </thead>
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
