// para validar email peguei do video https://www.youtube.com/watch?v=nRHCoOVSu5k&t=545s e

import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      botoaDesabilidado: true,
      email: '',
      senha: '',
      redirecionar: false,
    };
    this.HabilitarOBotao = this.HabilitarOBotao.bind(this);
    this.Redirecionar = this.Redirecionar.bind(this);
  }

  Redirecionar() {
    this.setState({ redirecionar: true });
  }

  HabilitarOBotao(event) {
    const { email, senha } = this.state;
    const { name, value } = event.target;
    const validaidon = /^([a-zA-Z0-9._]+)@[a-zA-Z0-9]+.([c-o]+)/;
    const minimoSenha = 5;
    this.setState({ [name]: value });
    if (email.match(validaidon) && senha.length >= minimoSenha) {
      this.setState({
        botoaDesabilidado: false,
      });
    }
  }

  render() {
    const { email, senha, botoaDesabilidado, redirecionar } = this.state;
    return (
      <form>
        {redirecionar && <Redirect to="/carteira" />}
        <input
          name="email"
          value={ email }
          placeholder="email"
          onChange={ this.HabilitarOBotao }
          testid="email-input"
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

export default Login;
