import React from 'react';
import Header from '../components/Header';
import '../css/Search.css';

class Search extends React.Component {
  state = {
    inputArtist: '',
  }

  handleChange = (event) => {
    const { target: { value } } = event;
    this.setState({ inputArtist: value });
  }

  render() {
    const { inputArtist } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            data-testid="search-artist-input"
            placeholder="Nome do Artista/Banda"
            onChange={ this.handleChange }
          />
          <button
            className="search-button"
            style={ { backgroundColor: inputArtist.length < 2 ? 'grey' : 'blue' } }
            data-testid="search-artist-button"
            type="button"
            disabled={ (inputArtist.length < 2) }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
