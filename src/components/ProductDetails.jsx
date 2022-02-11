import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromId, addProduct } from '../services/api';

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
    const { product } = this.state;
    const { title, price, thumbnail, attributes } = product;
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <img src={ thumbnail } alt="" />
        <p>{`R$ ${price}`}</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addProduct(product) }
        >
          Adicionar ao carrinho de Compras
        </button>
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho de Compras</Link>
        <Link to="/">Voltar</Link>
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
