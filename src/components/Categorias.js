import React from 'react';
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
      console.log(categories);
      return (
        <div>
          {categories.map((getCat) => (
            <button
              type="button"
              data-testid="category"
              name={ getCat.id }
              key={ getCat.id }
            >
              {getCat.name}
            </button>
          ))}
        </div>
      );
    }
}

export default Categorias;
