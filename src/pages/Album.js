import React from 'react';
import propTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import '../css/AlbumPage.css';

class Album extends React.Component {
  state = {
    musics: [{
      artworkUrl100: '',
      collectionName: '',
      artistName: '',
    }],
    isLoading: true,
    favoriteSongs: [],
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getMusics(id).then((response) => {
      this.setState({ musics: response });
    });
    getFavoriteSongs().then((response) => {
      this.setState({
        favoriteSongs: response,
        isLoading: false,
      });
    });
  }

  render() {
    const { musics, isLoading, favoriteSongs } = this.state;
    const main = (
      <main>
        <div className="album-info">
          <img src={ musics[0].artworkUrl100 } alt="capa do album" />
          <h3 data-testid="album-name">{ musics[0].collectionName }</h3>
          <h4 data-testid="artist-name">{ musics[0].artistName }</h4>
        </div>
        <div className="musics-container">
          <MusicCard
            setLoading={ () => {} }
            favorites={ favoriteSongs }
            musics={ musics.slice(1) }
          />
        </div>
      </main>
    );
    return (
      <div data-testid="page-album">
        <Header />
        {
          isLoading ? <Loading classe="musics-list-loading" /> : main
        }
      </div>
    );
  }
}

Album.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
