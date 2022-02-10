import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categorias extends React.Component {
    state = {
      categories: [],
    }

    componentDidMount() {
      this.fetchCategories();
    }

    fetchCategories = async () => {
      const categories = await getCategories();
      this.setState({ categories });
    }

    render() {
      const { categories } = this.state;
      const { onCatBtnClick } = this.props;
      return (
        <div>
          {categories.map((getCat) => (
            <button
              type="button"
              data-testid="category"
              name={ getCat.id }
              key={ getCat.id }
              onClick={ () => onCatBtnClick(getCat.id) }
            >
              {getCat.name}
            </button>
          ))}
        </div>
      );
    }
}

Categorias.propTypes = {
  onCatBtnClick: PropTypes.func.isRequired,
};

export default Categorias;
