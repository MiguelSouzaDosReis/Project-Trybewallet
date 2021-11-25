// para validar email utilizei o repositório do AndreLuiiz
// https://github.com/tryber/sd-015-b-project-trybewallet/pull/107/commits/22551509a28b4985d820fea9b610cac94a5df123
// e para enteder melhor o codigio dele utilizei esse site:
// https://stackoverflow.com/questions/49209362/what-is-the-meaning-of-s-s-gm-in-javascript
// para desativar o botão utilizei o repositório do Matheus Hammarstrom
// https://github.com/tryber/sd-015-b-project-trybewallet/pull/115/commits/be103823bd3346de8f97516ca345438f5f774d03

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { setEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      botoaDesabilidado: true,
      email: '',
      senha: '',
      redireciona: false,
    };
    this.HabilitarOBotao = this.HabilitarOBotao.bind(this);
    this.Redirecionar = this.Redirecionar.bind(this);
  }

  Redirecionar() {
    setEmail();
    const { setUserEmail } = this.props;
    const { email } = this.state;
    setUserEmail(email);
    this.setState({ redireciona: true });
  }

  HabilitarOBotao(event) {
    const { email, senha } = this.state;
    const { name, value } = event.target;
    const validacaoDoEmail = /\S+@\S+\.\S+/;
    const minimoSenha = 5;
    const emaiiValidado = email.match(validacaoDoEmail);
    const senhavalidada = senha.length >= minimoSenha;
    this.setState({ [name]: value });
    const validacao = emaiiValidado && senhavalidada;
    this.setState({
      botoaDesabilidado: !validacao,
    });
  }

  render() {
    const { email, senha, botoaDesabilidado, redireciona } = this.state;
    return (
      <form>
        {redireciona && <Redirect to="/carteira" />}
        <input
          name="email"
          value={ email }
          placeholder="email"
          onChange={ this.HabilitarOBotao }
          data-testid="email-input"
          type="email"
        />
        <input
          name="senha"
          value={ senha }
          placeholder="senha"
          onChange={ this.HabilitarOBotao }
          data-testid="password-input"
          type="password"
        />
        <button
          disabled={ botoaDesabilidado }
          type="submit"
          onClick={ this.Redirecionar }
        >
          Entrar

        </button>
      </form>
    );
  }
}
const mapDispatchToProp = (dispatch) => ({
  setUserEmail: (state) => dispatch(setEmail(state)),
});

Login.propTypes = {
  setUserEmail: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProp)(Login);
