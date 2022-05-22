import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';
import '../css/Profile.css';

class Profile extends React.Component {
  state = {
    isLoading: true,
    user: {},
  }

  componentDidMount() {
    getUser().then((user) => {
      this.setState({
        isLoading: false,
        user,
      });
    });
  }

  render() {
    const { isLoading, user } = this.state;
    const mainContent = (
      <div className="profile">
        <div className="image-link-container">
          <img src={ user.image } alt="foto de perfil" data-testid="profile-image" />
          <Link className="link-edit-profile" to="/profile/edit">Editar perfil</Link>
        </div>
        <div className="user-info">
          <h3>Nome</h3>
          <h2>{user.name}</h2>
        </div>
        <div className="user-info">
          <h3>Email</h3>
          <p>{user.email}</p>
        </div>
        <div className="user-info">
          <h3>Descrição</h3>
          <p>{user.description}</p>
        </div>
      </div>
    );
    return (
      <div className="page-profile" data-testid="page-profile">
        <Header />
        <main className="page-profile">
          {
            isLoading ? <Loading classe="loading-profile" /> : mainContent
          }
        </main>
      </div>
    );
  }
}

export default Profile;
