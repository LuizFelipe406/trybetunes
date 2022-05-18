import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getUser } from '../services/userAPI';

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
    const userComponent = <p>{userName}</p>;
    return (
      <header
        data-testid="header-component"
      >
        <div
          data-testid="header-user-name"
        >
          {
            loading ? <Loading classe="header-user-loading" /> : userComponent
          }
        </div>
        <nav className="links">
          <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
          <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
