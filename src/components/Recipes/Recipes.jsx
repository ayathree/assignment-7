import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import Ingredient from "../Ingredient/Ingredient";

const Recipes = ({recipe}) => {



    const {recipe_image, recipe_name, short_description, preparing_time, calories}=recipe

const ingredients= recipe.ingredients;
console.log(ingredients);
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure className="px-5 pt-10">
    <img src={recipe_image} alt='' className="rounded-xl" />
  </figure>
  <div className="card-body  text-start">
    <h2 className="card-title">{recipe_name}</h2>
    <p className="border-b-2 border-black">{short_description}</p>
   <p className="text-lg font-semibold" >Ingredients : {ingredients.length} </p>
   <ul className="list-disc px-5 border-b-2 border-black">
    
    {
        ingredients.map((ingredient,idx)=><Ingredient key={idx}
        ingredient={ingredient}>

        </Ingredient>)
    }
      
    
   </ul>
   <div className="flex flex-row justify-between items-center">
    <div className="flex flex-row items-center ">
    <CiClock2 />
    <p>{preparing_time}</p>
    </div>
    <div className="flex flex-row items-center ">
    <AiOutlineFire />
    <p>{calories}</p>

    </div>
   </div>
    <div className="card-actions">
      <button className="btn bg-green-400">Want to cook</button>
    </div>
  </div>
</div>
    );
};

export default Recipes;