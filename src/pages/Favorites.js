import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';
import '../css/Favorites.css';

class Favorites extends React.Component {
  state = {
    isLoading: true,
    favorites: [],
  }

  componentDidMount() {
    this.fetchFavoriteSongs();
  }

  componentDidUpdate() {
    this.fetchFavoriteSongs();
  }

  fetchFavoriteSongs = () => {
    getFavoriteSongs().then((response) => {
      this.setState({
        isLoading: false,
        favorites: response,
      });
    });
  }

  setLoadingFavorites = () => {
    this.setState({ isLoading: true });
  }

  render() {
    const { isLoading, favorites } = this.state;
    const main = (
      <main className="main-favorites">
        <h1 className="favorite-title">Musicas Favoritas</h1>
        <MusicCard
          setLoading={ this.setLoadingFavorites }
          musics={ favorites }
          favorites={ favorites }
        />
      </main>
    );
    return (
      <div data-testid="page-favorites">
        <Header />
        {
          isLoading ? <Loading classe="favorites-loading" /> : main
        }
      </div>
    );
  }
}

export default Favorites;
