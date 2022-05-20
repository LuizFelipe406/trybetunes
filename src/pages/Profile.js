import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

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
    const main = (
      <div className="profile">
        <img src={ user.image } alt="foto de perfil" data-testid="profile-image" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.description}</p>
      </div>
    );
    return (
      <div data-testid="page-profile">
        <Header />
        {
          isLoading ? <Loading classe="loading-profile" /> : main
        }
        <Link to="/profile/edit">Editar perfil</Link>
      </div>
    );
  }
}

export default Profile;
