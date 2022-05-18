import React from 'react';
import propTypes from 'prop-types';

class Loading extends React.Component {
  render() {
    const { classe } = this.props;
    return (
      <p className={ classe }>
        Carregando...
      </p>
    );
  }
}

Loading.propTypes = {
  classe: propTypes.string.isRequired,
};

export default Loading;
