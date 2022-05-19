import React from 'react';
import propTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  state = {
    musics: [{
      artworkUrl100: '',
      collectionName: '',
      artistName: '',
    }],
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getMusics(id).then((response) => {
      this.setState({ musics: response });
    });
  }

  render() {
    const { musics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div className="album-card">
          <img src={ musics[0].artworkUrl100 } alt="capa do album" />
          <h3 data-testid="album-name">{ musics[0].collectionName }</h3>
          <h4 data-testid="artist-name">{ musics[0].artistName }</h4>
        </div>
        <div className="musics-container">
          <MusicCard musics={ musics.slice(1) } />
        </div>
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
