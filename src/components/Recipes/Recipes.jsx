import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import Ingredient from "../Ingredient/Ingredient";
import PropTypes from 'prop-types';

const Recipes = ({recipe,handleWantToCook}) => {



    const {recipe_image, recipe_name, short_description, preparing_time, calories}=recipe

const ingredients= recipe.ingredients;
console.log(ingredients);
    return (
        <div className="card border-2 bg-base-100 shadow-xl">
  <figure className="p-2">
    <img  src={recipe_image} alt='' className="rounded-xl w-[300px] h-[250px]" />
  </figure>
  <div className="card-body  text-start">
    <h2 className="card-title">{recipe_name}</h2>
    <p className="border-b-2 border-green-400 text-gray-500 ">{short_description}</p>
   <p className="text-lg font-semibold" >Ingredients : {ingredients.length} </p>
   <ul className="list-disc px-5 border-b-2 border-green-400">
    
    {
        ingredients.map((ingredient,idx)=><Ingredient key={idx}
        ingredient={ingredient}>

        </Ingredient>)
    }
      
    
   </ul>
   <div className="flex flex-row justify-between items-center">
    <div className="flex flex-row items-center ">
    <CiClock2 />
    <p>{preparing_time} min</p>
    </div>
    <div className="flex flex-row items-center ">
    <AiOutlineFire />
    <p>{calories} calories</p>

    </div>
   </div>
    <div className="card-actions">
      <button onClick={()=>handleWantToCook(recipe)} className="btn bg-green-400">Want to Cook</button>
    </div>
  </div>
</div>
    );
};
Recipes.propTypes ={
  recipe:PropTypes.object.isRequired,
  handleWantToCook:PropTypes.func.isRequired,
}

export default Recipes;