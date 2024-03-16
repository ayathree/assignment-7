

const Sidebar = ({item, handlePreparing}) => {
    const{id,recipe_name, preparing_time, calories}=item
    return (
        
        
        <tr className='border-b-2 border-gray-300'>
        <td className="text-xs lg:text-lg">{recipe_name}</td>
        <td className="text-xs lg:text-lg">{preparing_time}</td>
        <td className="text-xs lg:text-lg" >{calories}</td>
        <td className="text-xs lg:text-lg"><button onClick={()=>handlePreparing(id,item)} className='lg:btn bg-green-400 lg:bg-green-400'>Preparing</button></td>
      </tr>
        
    );
};

export default Sidebar;