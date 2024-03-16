


import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'

import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes';

function App() {
  const [recipes, setRecipes]= useState([]);

  useEffect(()=>{
    fetch('recipes.json')
    .then(res=>res.json())
    .then(data=>setRecipes(data))
  },[])
 
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>

    
    
    
    <div>
      <h1 className='text-3xl font-semibold'>Our Recipes</h1>
      <p>Here you can find six of our popular dishes as a beginner learner. You can select any one or more items that you want to cook </p>
    </div>

    <div className='flex flex-row justify-between'>
   <div className='grid grid-cols-2 gap-7'>
    {
      recipes.map(recipe=><Recipes key={recipe.id}
      recipe={recipe}></Recipes>)
    }
   
   </div>
    <div className='border-2 border-black border-solid rounded-xl p-9'>
      <h1>want to cook</h1>
    </div>
   </div>
   
     
     
      
     
    </>
  )
}

export default App
