// Fiz o requisito 7 baseado no repositorio do Guilherme Saboia
// https://github.com/tryber/sd-015-b-project-trybewallet/pull/34/commits/7559443fc24d8d15e5ef64e16ef477c3afb23112
// também utilizei o stackoverflow que estava no respositorio dele para enteder melhor o codigo
// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Tabela extends React.Component {
  constructor() {
    super();
    this.Requisto7 = this.Requisto7.bind(this);
  }

  Requisto7() {
    const { expenses } = this.props;
    return expenses.map((element) => {
      const { id, description, tag, method, value, exchangeRates, currency } = element;
      const { ask, name } = exchangeRates[currency];
      const aredondandoOValue = Math.round(value * 100) / 100;
      const aredondandoOAsk = Math.round(ask * 100) / 100;
      const aredondandoOTotal = Math.round(value * ask * 100) / 100;
      return (
        <tr key={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ aredondandoOValue }</td>
          <td>{ name }</td>
          <td>{ aredondandoOAsk }</td>
          <td>{ aredondandoOTotal }</td>
          <td>Real</td>
          <td>
            <button
              type="button"
            >
              Editar/Excluir
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
        {this.Requisto7()}
      </table>
    );
  }
}

const mapStateToProp = (state) => ({
  expenses: state.wallet.expenses,
});
Tabela.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProp, null)(Tabela);
