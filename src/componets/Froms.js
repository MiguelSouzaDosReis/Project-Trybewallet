import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions/fetch';
import { setExpenses } from '../actions/index';
import Descricao from '../ComponetesDoForms/Descricao';
import ValorDasDespesas from '../ComponetesDoForms/ValorDasDespesas';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    };
    this.Digita = this.Digita.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { fetchUserAPI } = this.props;
    fetchUserAPI();
  }

  Digita(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  moeda() {
    const { currencies } = this.props;
    return Object.keys(currencies).map((coins) => (
      coins === 'USDT' ? false : (
        <option value={ coins }>{ coins }</option>
      )
    ));
  }

  handleClick() {
    const { currencies, fetchUserAPI } = this.props;
    const { id,
      value,
      description,
      method,
      tag,
      currency,

    } = this.state;
    fetchUserAPI();
    this.setState((estadoAnterior) => ({ id: estadoAnterior.id + 1 }));
    this.setState({ value: 0 });
    const { setUserForms } = this.props;
    setUserForms({ id,
      value,
      description,
      method,
      tag,
      currency,
      exchangeRates: currencies });
  }

  render() {
    const { value, description } = this.state;
    return (
      <forms>
        <ValorDasDespesas change={ this.Digita } valor={ value } />
        <Descricao change={ this.Digita } valor={ description } />
        <label htmlFor="moeda">
          MOEDA:
          <select
            name="currency"
            onChange={ this.Digita }
            id="moeda"
            data-testid="currency-input"
          >
            {this.moeda()}
          </select>
        </label>
        <select onChange={ this.Digita } name="method" data-testid="method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select onChange={ this.Digita } name="tag" data-testid="tag-input">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button onClick={ this.handleClick } type="submit">Adicionar despesa</button>
      </forms>
    );
  }
}

const mapStateToProp = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProp = (dispatch) => ({
  fetchUserAPI: () => dispatch(fetchAPI()),
  setUserForms: (state) => dispatch(setExpenses(state)),
});

Forms.propTypes = {
  currencies: PropTypes.shape(PropTypes.object).isRequired,
  fetchUserAPI: PropTypes.func.isRequired,
  setUserForms: PropTypes.func.isRequired,
};

export default connect(mapStateToProp, mapDispatchToProp)(Forms);
