import React from 'react';
import PropTypes from 'prop-types';

class TextFilter extends React.Component {
    state= {
      query: undefined,
    }

    handleInputChange = ({ target }) => {
      this.setState({
        query: target.value,
      });
    }

    render() {
      const { onQueryBtnClick } = this.props;
      const { query } = this.state;
      return (
        <div>
          <label htmlFor="query-input">
            Filtrar por Nome
            <input
              id="query-input"
              data-testid="query-input"
              type="text"
              onChange={ this.handleInputChange }
            />
          </label>
          <button
            data-testid="query-button"
            type="button"
            onClick={ () => onQueryBtnClick(query) }
          >
            Buscar

          </button>
        </div>
      );
    }
}

TextFilter.propTypes = {
  onQueryBtnClick: PropTypes.func.isRequired,
};

export default TextFilter;
