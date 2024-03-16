


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

    <div className='flex flex-row justify-between gap-10 '>
   <div className='grid grid-cols-2 gap-7 w-2/3 '>
    {
      recipes.map(recipe=><Recipes key={recipe.id}
      recipe={recipe}></Recipes>)
    }
   
   </div>
    <div className='border-2  bg-base-100 shadow-xl p-9 w-1/3 '>
      <h1 className='text-xl font-semibold border-b-2 border-green-400'>Want to cook : </h1>
      <table className=' p-2  '>
  <tr className='border-b-2 border-gray-300 p-2'>
    <th>Name</th>
    <th>Time</th>
    <th>Calories</th>
  </tr>
  <tr className='border-b-2 border-gray-300'>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td><button className='btn bg-green-400'>Preparing</button></td>
  </tr>
 
</table>

    </div>
   </div>
   
     
     
      
     
    </>
  )
}

export default App
