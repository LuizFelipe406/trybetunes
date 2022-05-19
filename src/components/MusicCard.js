import React from 'react';
import propTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { musics } = this.props;
    console.log(musics);
    return (
      <div>
        {
          musics.map((music) => (
            <div className="music" key={ music.trackId }>
              <h4>{ music.trackName }</h4>
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
            </div>
          ))
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  musics: propTypes.arrayOf(propTypes.object.isRequired).isRequired,
};

export default MusicCard;
