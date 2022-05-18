import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../Components/Loading';

class Login extends React.Component {
  state = {
    userName: '',
    loading: false,
    redirect: false,
  };

  handleChange = (event) => {
    const { target: { value } } = event;
    this.setState({
      userName: value,
    });
  }

  onClickButtonEntrar = () => {
    this.setState({ loading: true });
    const { userName } = this.state;
    const userObject = { name: userName };
    createUser(userObject).then((response) => {
      if (response === 'OK') {
        this.setState({ redirect: true });
      }
    });
  };

  render() {
    const { userName, loading, redirect } = this.state;
    const minLength = 3;
    const form = (
      <form>
        <input
          type="text"
          placeholder="Digite seu nome"
          data-testid="login-name-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="login-submit-button"
          disabled={ userName.length < minLength }
          onClick={ this.onClickButtonEntrar }
        >
          Entrar
        </button>
      </form>
    );
    return (
      <div data-testid="page-login">
        {loading ? <Loading /> : form}
        {redirect && <Redirect to="/search" />}
      </div>
    );
  }
}

export default Login;
