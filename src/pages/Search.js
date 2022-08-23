import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import AlbumsCard from '../components/AlbumsCard';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import '../css/Search.css';

class Search extends React.Component {
  state = {
    inputArtist: '',
    albums: [],
    loading: false,
    artistName: '',
    isAlbumFound: true,
  }

  handleChange = (event) => {
    const { target: { value } } = event;
    this.setState({ inputArtist: value });
  }

  handleClickSearch = () => {
    const { inputArtist } = this.state;
    this.setState({ loading: true }, () => {
      searchAlbumsAPI(inputArtist).then((response) => this.setState({
        albums: response,
        inputArtist: '',
        loading: false,
        artistName: inputArtist,
        isAlbumFound: response.length !== 0,
      }));
    });
  }

  render() {
    const { inputArtist, loading, artistName, albums, isAlbumFound } = this.state;
    const content = (
      <div>
        <form className="search-form">
          <input
            value={ inputArtist }
            className="search-input"
            type="text"
            data-testid="search-artist-input"
            placeholder="Nome do Artista/Banda"
            onChange={ this.handleChange }
          />
          <button
            onClick={ this.handleClickSearch }
            className="search-button"
            style={ { backgroundColor: inputArtist.length < 2 ? 'grey' : 'blue' } }
            data-testid="search-artist-button"
            type="button"
            disabled={ (inputArtist.length < 2) }
          >
            Pesquisar
          </button>
        </form>
        <section>
          <h2 className="section-albums-title">
            { `Resultado de álbuns de: ${artistName}` }
          </h2>
          <div className="albums-container">
            {
              (isAlbumFound)
                ? <AlbumsCard albums={ albums } /> : <h3>Nenhum álbum foi encontrado</h3>
            }
          </div>
        </section>
      </div>
    );
    return (
      <div data-testid="page-search">
        <Header />
        {
          loading ? <Loading classe="loading-search-content" /> : content
        }

      </div>
    );
  }
}

export default Search;
