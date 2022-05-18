import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';
import '../css/Header.css';

class Header extends React.Component {
  state = {
    loading: true,
    userName: '',
  }

  componentDidMount() {
    getUser().then((response) => {
      if (response !== {}) {
        this.setState({
          loading: false,
          userName: response.name,
        });
      }
    });
  }

  render() {
    const { loading, userName } = this.state;
    const userComponent = (
      <div className="userComponent">
        <img className="userImage" src="https://cdn.pixabay.com/photo/2021/07/25/08/03/account-6491185_960_720.png" alt="avatar de profile" />
        <p>{userName}</p>
      </div>
    );
    return (
      <header
        data-testid="header-component"
      >
        <div
          className="userContainer"
          data-testid="header-user-name"
        >
          <div className="tiltes-header">
            <span className="title-header-1">Trybe</span>
            <span className="title-header-2">Tunes</span>
            <img className="titleImage" src="https://cdn.pixabay.com/photo/2017/02/27/20/48/headphones-2104207_960_720.png" alt="Imagem de fone" />
          </div>
          {
            loading ? <Loading classe="header-user-loading" /> : userComponent
          }
        </div>
        <nav className="links">
          <Link
            className="searchLink"
            to="/search"
            data-testid="link-to-search"
          >
            Pesquisar
          </Link>
          <Link
            className="favoritesLink"
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favoritos
          </Link>
          <Link
            className="profileLink"
            to="/profile"
            data-testid="link-to-profile"
          >
            Perfil
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
