import PropTypes from 'prop-types';

const Current = ({sample}) => {
    const {recipe_name, preparing_time, calories}=sample;
   
    return (
        <tr className='border-b-2 border-gray-300'>
        <td className="text-xs p-4" colSpan={2}>{recipe_name}</td>
        <td className="text-xs p-4">{preparing_time} min</td>
        <td className="text-xs p-4" >{calories} calories</td>
        
      </tr>
    );
};

Current.propTypes ={
  sample:PropTypes.object.isRequired,
}

export default Current;