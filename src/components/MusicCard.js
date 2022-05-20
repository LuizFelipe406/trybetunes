import React from 'react';
import propTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  state = {
    isLoading: false,
  }

  componentDidMount() {
    const { favorites } = this.props;
    favorites.forEach((music) => {
      this.setState({
        [music.trackId]: true,
      });
    });
  }

  handleChangeFavorites = (music) => {
    const { trackId } = music;
    const { [trackId]: checked } = this.state;
    const { setLoading } = this.props;
    if (checked) {
      this.setState({ isLoading: true }, () => {
        removeSong(music)
          .then(() => { setLoading(); })
          .then(() => this.setState({
            isLoading: false,
            [trackId]: false,
          }));
      });
    } else {
      this.setState({ isLoading: true }, () => {
        addSong(music).then(() => {
          getFavoriteSongs().then((response) => {
            response.forEach((musicFav) => {
              this.setState({
                [musicFav.trackId]: true,
                isLoading: false,
              });
            });
          });
        });
      });
    }
  }

  render() {
    const { musics } = this.props;
    const { isLoading } = this.state;
    const musicList = (
      <ul className="music-list-div">
        {
          musics.map((music) => {
            const { trackId, trackName, previewUrl } = music;
            const { [trackId]: checked } = this.state;
            return (
              <li className="music" key={ trackId }>
                <p>{`${trackName}`}</p>
                <audio
                  data-testid="audio-component"
                  src={ previewUrl }
                  controls
                >
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  <code>audio</code>
                  .
                </audio>
                <label htmlFor="favoriteCheckbox">
                  <input
                    name={ trackId }
                    checked={ checked }
                    data-testid={ `checkbox-music-${trackId}` }
                    id="favoriteCheckbox"
                    type="checkbox"
                    onChange={ () => this.handleChangeFavorites(music) }
                  />
                  Favorita
                </label>
              </li>
            );
          })
        }
      </ul>
    );
    return (
      isLoading ? <Loading classe="musicsList" /> : musicList
    );
  }
}

MusicCard.propTypes = {
  musics: propTypes.arrayOf(propTypes.object.isRequired).isRequired,
  favorites: propTypes.arrayOf(propTypes.object.isRequired).isRequired,
};

export default MusicCard;
