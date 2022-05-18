import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import '../css/Login.css';

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
      <div className="login-page">
        <div className="titles">
          <div className="title-image-login-container">
            <span className="title-1">Trybe</span>
            <img className="titleImageLogin" src="https://cdn.pixabay.com/photo/2017/02/27/20/48/headphones-2104207_960_720.png" alt="Imagem de fone" />
          </div>
          <span className="title-2">Tunes</span>
        </div>
        <form>
          <input
            type="text"
            placeholder="Digite seu nome"
            data-testid="login-name-input"
            onChange={ this.handleChange }
          />
          <button
            style={ { backgroundColor: userName.length < minLength ? 'red' : 'blue' } }
            type="button"
            data-testid="login-submit-button"
            disabled={ userName.length < minLength }
            onClick={ this.onClickButtonEntrar }
          >
            Entrar
          </button>
        </form>
      </div>
    );
    return (
      <div data-testid="page-login">
        {loading ? <Loading classe="loading-login-page" /> : form}
        {redirect && <Redirect to="/search" />}
      </div>
    );
  }
}

export default Login;
