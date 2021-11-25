import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email /* valor, cambio */ } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  email: state.user.email,
  // valor: state.wallet.valor,
  // cambio: state.wallet.string,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  // valor: PropTypes.number.isRequired,
  // cambio: PropTypes.string.isRequired,
};

export default connect(mapStateToProp, null)(Wallet);
