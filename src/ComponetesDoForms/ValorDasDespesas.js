import React from 'react';
import PropTypes from 'prop-types';

class ValorDasDespesas extends React.Component {
  render() {
    const { change, valor } = this.props;
    return (
      <label htmlFor="valor">
        <input
          id="valor"
          name="value"
          data-testid="value-input"
          type="number"
          value={ valor }
          onChange={ change }
          placeholder="Valor das Despesas"
        />
      </label>
    );
  }
}
ValorDasDespesas.propTypes = {
  change: PropTypes.func.isRequired,
  valor: PropTypes.string.isRequired,
};

export default ValorDasDespesas;
