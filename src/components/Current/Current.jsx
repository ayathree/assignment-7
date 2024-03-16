

const Current = ({sample}) => {
    const {recipe_name, preparing_time, calories}=sample;
   
    return (
        <tr className='border-b-2 border-gray-300'>
        <td className="text-xs lg:text-lg">{recipe_name}</td>
        <td className="text-xs lg:text-lg">{preparing_time}</td>
        <td className="text-xs lg:text-lg" >{calories}</td>
        
      </tr>
    );
};

export default Current;