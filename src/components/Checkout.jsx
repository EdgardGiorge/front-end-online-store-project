import React, { Component } from 'react';
import { getProducts } from '../services/api';

const initialState = {

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

class Checkout extends Component {
  constructor() {
    super();
    this.state = { ...initialState };
  }

  render() {
    const itens = getProducts();
    const {
      name,
      CPF,
      email,
      phone,
      CEP,
      address,
      complement,
      number,
      city,
      state,
    } = this.state;

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
        <form>
          <h3>Informações do Comprador</h3>
          <label htmlFor="name-input">
            <input
              name="cardName"
              type="text"
              value={ name }
              placeholder="Nome Completo"
              data-testid="checkout-fullname"
            />
          </label>
          <label htmlFor="email-input">
            <input
              name="email"
              type="text"
              value={ email }
              placeholder="Email"
              data-testid="checkout-email"
            />
          </label>
          <label htmlFor="cpf-input">
            <input
              name="cpf"
              type="number"
              value={ CPF }
              placeholder="CPF"
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="phone-input">
            <input
              name="phone"
              type="number"
              value={ phone }
              placeholder="Telefone"
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="cep-input">
            <input
              name="cep"
              type="text"
              value={ CEP }
              placeholder="CEP"
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="address-input">
            <input
              name="address"
              type="text"
              value={ address }
              placeholder="Endereço"
              data-testid="checkout-address"
            />
          </label>
          <label htmlFor="complement-input">
            <input
              name="complement"
              type="text"
              value={ complement }
              placeholder="Complemento"
            />
          </label>
          <label htmlFor="number-input">
            <input
              name="number"
              type="number"
              value={ number }
              placeholder="Número"
            />
          </label>
          <label htmlFor="city-input">
            <input
              name="city"
              type="text"
              value={ city }
              placeholder="Cidade"
            />
          </label>

          <select name="select-state" value={ state }>
            <option value="nan">Selecionar Estado</option>
            <option value="mg">Minas Gerais</option>
            <option value="sp">São Paulo</option>
            <option value="rj">Rio de Janeiro</option>
            <option value="df">Distrito Federal</option>
            <option value="pr">Paraná</option>
            <option value="es">Espírito Santo</option>
            <option value="sc">Santa Catarina</option>
            <option value="rs">Rio Grande do Sul</option>
          </select>

          <button
            type="submit"
          >
            Simular Frete
          </button>
        </form>
        <form>
          <h2>Método de Pagamento</h2>
          <label htmlFor="boleto">
            Boleto
            <input type="radio" id="boleto" name="boleto" value="boleto" />
          </label>
          <label htmlFor="Visa">
            Visa
            <input type="radio" id="Visa" name="Visa" value="Visa" />
          </label>
          <label htmlFor="MasterCard">
            MasterCard
            <input type="radio" id="MasterCard" name="MasterCard" value="MasterCard" />
          </label>
          <label htmlFor="elo">
            Elo
            <input type="radio" id="elo" name="elo" value="elo" />
          </label>
        </form>
        <button
          type="submit"
        >
          Comprar
        </button>

      </div>
    );
  }
}

export default Checkout;
