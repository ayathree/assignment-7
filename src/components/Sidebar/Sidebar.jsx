import PropTypes from 'prop-types';

const Sidebar = ({item, handlePreparing}) => {
    const{id,recipe_name, preparing_time, calories}=item
    return (
        
        
        <tr className='border-b-2 border-gray-300 '>
        <td className="text-xs p-4">{recipe_name}</td>
        <td className="text-xs p-4">{preparing_time}min</td>
        <td className="text-xs p-4" >{calories} calories</td>
        <td className="text-xs p-4"><button onClick={()=>handlePreparing(id,item)} className='lg:btn bg-green-400 lg:bg-green-400'>Preparing</button></td>
      </tr>
        
    );
};

Sidebar.propTypes = {
  item: PropTypes.object.isRequired,
  handlePreparing: PropTypes.func.isRequired,
 
}

export default Sidebar;