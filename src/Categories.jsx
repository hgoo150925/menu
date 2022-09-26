import PropTypes from 'prop-types';

export const Categories = ({ categories, filterMenu }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  filterMenu: PropTypes.func.isRequired,
};
