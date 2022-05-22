import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from '../components/Loading';

class ProfileEdit extends React.Component {
  state= {
    isLoading: true,
    isDisabled: true,
    redirect: false,
    name: '',
    email: '',
    description: '',
    image: '',
  }

  componentDidMount() {
    getUser().then((response) => {
      this.setState({
        isLoading: false,
        name: response.name,
        email: response.email,
        description: response.description,
        image: response.image,
      }, () => this.checkButton());
    });
  }

  handleChange = (event) => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value,
    }, () => this.checkButton());
  }

  checkButton = () => {
    const { name, email, description, image } = this.state;
    const stateArray = [name, email, description, image];
    const regexEmail = /\S+@\S+\.\S+/;
    if (!stateArray.includes('') && regexEmail.test(email)) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  onClickButton = () => {
    const { name, email, description, image } = this.state;
    const updatedUser = {
      name, email, description, image,
    };
    this.setState({ isLoading: true }, () => {
      updateUser(updatedUser).then(() => {
        this.setState({ redirect: true });
      });
    });
  }

  render() {
    const {
      isLoading,
      name,
      email,
      description,
      image,
      isDisabled,
      redirect,
    } = this.state;
    const userDefaultImage = 'https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_960_720.png';
    const mainContent = (
      <form>
        <div>
          <img
            width="100px"
            src={ image === '' ? userDefaultImage : image }
            alt="avatar do usuario"
          />
          <input
            type="text"
            name="image"
            placeholder="insira um Link"
            data-testid="edit-input-image"
            value={ image }
            onChange={ this.handleChange }
          />
        </div>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            name="name"
            id="name-input"
            data-testid="edit-input-name"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            type="text"
            name="email"
            id="email-input"
            data-testid="edit-input-email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            type="textarea"
            name="description"
            id="description-input"
            data-testid="edit-input-description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="edit-button-save"
          type="button"
          disabled={ isDisabled }
          onClick={ this.onClickButton }
        >
          Salvar
        </button>
      </form>
    );
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <main>
          {
            isLoading ? <Loading classe="loading-edit-profile" /> : mainContent
          }
          {redirect && <Redirect to="/profile" />}
        </main>
      </div>
    );
  }
}

export default ProfileEdit;
