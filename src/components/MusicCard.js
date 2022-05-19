import React from 'react';
import propTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { musics } = this.props;
    console.log(musics);
    return (
      <ul className="music-list-div">
        {
          musics.map((music) => (
            <li className="music" key={ music.trackId }>
              <p>{`${music.trackNumber} - ${music.trackName}`}</p>
              <audio
                data-testid="audio-component"
                src={ music.previewUrl }
                controls
              >
                <track kind="captions" />
                O seu navegador não suporta o elemento
                <code>audio</code>
                .
              </audio>
            </li>
          ))
        }
      </ul>
    );
  }
}

MusicCard.propTypes = {
  musics: propTypes.arrayOf(propTypes.object.isRequired).isRequired,
};

export default MusicCard;
