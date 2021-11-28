import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI } from '../actions/fetch';

class Forms extends React.Component {
  constructor(){
    super()
    this.state = {
      depesas:'',
      descricao: '',
      
    }
  }
  async componentDidMount() {
    const { fetchUserAPI } = this.props;
    fetchUserAPI();
  }

  moeda() {
    const { currencies } = this.props;
    return Object.keys(currencies).map((coins) => (
      coins === 'USDT' ? false : (<option>{ coins }</option>)
    ));
  }

  render() {
    return (
      <forms>
        <input placeholder="valor da despesa" data-testid="value-input" type="text" />
        <input
          placeholder="descrição da despesa"
          data-testid="description-input"
          type="text"
        />
        <label htmlFor="moeda">
          MOEDA:
          <select id="moeda" data-testid="currency-input">
            {this.moeda()}
          </select>
        </label>
        <select>
          <option data-testid="method-input">Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
        <button type="submit">Adicionar despesa</button>
      </forms>
    );
  }
}

const mapStateToProp = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProp = (dispatch) => ({
  fetchUserAPI: () => dispatch(fetchAPI()),
});

/* Forms.propTypes = {
  currencies: PropTypes.string.isRequired,
  fetchUserAPI: PropTypes.string.isRequired,
}; */

export default connect(mapStateToProp, mapDispatchToProp)(Forms);
