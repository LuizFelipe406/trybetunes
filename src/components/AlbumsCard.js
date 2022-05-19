import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/AlbumsCard.css';

class AlbumsCard extends React.Component {
  render() {
    const { albums } = this.props;
    return (
      albums.map((album) => (
        <Link
          className="link"
          key={ album.collectionId }
          to={ `/album/${album.collectionId}` }
          data-testid={ `link-to-album-${album.collectionId}` }
        >
          <div className="album-card">
            <img src={ album.artworkUrl100 } alt="capa do album" />
            <h3>{album.collectionName}</h3>
            <h4>{album.artistName}</h4>
            <h4>{`$${album.collectionPrice}`}</h4>
          </div>
        </Link>
      ))
    );
  }
}

AlbumsCard.propTypes = {
  albums: propTypes.arrayOf({
    artistId: propTypes.number.isRequired,
    artistName: propTypes.string.isRequired,
    collectionId: propTypes.number.isRequired,
    collectionName: propTypes.string.isRequired,
    collectionPrice: propTypes.number.isRequired,
    artworkUrl100: propTypes.string.isRequired,
    releaseDate: propTypes.string.isRequired,
    trackCount: propTypes.number.isRequired,
  }).isRequired,
};

export default AlbumsCard;
