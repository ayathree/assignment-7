

const Sidebar = ({item}) => {
    const{recipe_name, preparing_time, calories}=item
    return (
        
        <tr className='border-b-2 border-gray-300'>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td >{calories}</td>
        <td><button className='btn bg-green-400'>Preparing</button></td>
      </tr>
        
    );
};

export default Sidebar;