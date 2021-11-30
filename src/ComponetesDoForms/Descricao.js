import React from 'react';
import PropTypes from 'prop-types';

class Descricao extends React.Component {
  render() {
    const { change, valor } = this.props;
    return (
      <label htmlFor="DescricaoDaDespesas">
        <input
          id="DescricaoDaDespesas"
          name="description"
          data-testid="description-input"
          type="text"
          value={ valor }
          onChange={ change }
          placeholder="Descrição Das Depesas"
        />
      </label>
    );
  }
}
Descricao.propTypes = {
  change: PropTypes.func.isRequired,
  valor: PropTypes.string.isRequired,
};

export default Descricao;
