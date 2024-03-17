import PropTypes from 'prop-types';

const Ingredient = ({ingredient}) => {
    return (
      <li className="text-gray-500">{ingredient}</li> 
    );
};

Ingredient.propTypes = {
  ingredient: PropTypes.array.isRequired,
 
}

export default Ingredient;