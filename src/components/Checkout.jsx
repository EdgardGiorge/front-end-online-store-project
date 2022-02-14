import React, { Component } from 'react';
import { getProducts } from '../services/api';

class Checkout extends Component {
  initialState = {

    name: '',
    CPF: '',
    email: '',
    phone: '',
    CEP: '',
    address: '',
    complement: '',
    number: '',
    city: '',
    state: '',

  };

  render() {
    const itens = getProducts();

    return (
      <div>
        <p>Pagina de Finalizacao</p>
        <div>
          <h3>Revise seus Produtos</h3>
          {itens.map((product) => (
            <div key={ product.id }>
              <span>{product.title}</span>
              <span>{product.price}</span>
              <span>{product.quantity}</span>
              <img src={ product.thumbnail } alt="" />
            </div>
          ))}
          <h3>Total:</h3>
        </div>
        <div>
          <h3>Informações do Comprador</h3>
        </div>
      </div>
    );
  }
}

export default Checkout;
