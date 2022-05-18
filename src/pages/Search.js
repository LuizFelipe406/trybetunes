import React from 'react';
import Header from '../components/Header';

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
      <div className="search-page" data-testid="page-search">
        <Header />
        <form>
          <input
            type="text"
            data-testid="search-artist-input"
            placeholder="Nome do Artista/Banda"
            onChange={ this.handleChange }
          />
          <button
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
