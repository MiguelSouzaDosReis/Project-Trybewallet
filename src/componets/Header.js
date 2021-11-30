import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.caculo = this.caculo.bind(this);
  }

  caculo() {
    const { expenses } = this.props;
    let Total = 0;
    expenses.forEach((element) => {
      const { ask } = element.exchangeRates[element.currency];
      const valor = element.value;
      Total += ask * valor;
    });
    return Total;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ this.caculo() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>

    );
  }
}

const mapStateToProp = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProp, null)(Header);
