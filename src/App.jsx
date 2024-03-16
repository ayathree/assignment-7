


import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'

import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes';
import Sidebar from './components/Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [recipes, setRecipes]= useState([]);
  const [items, setItems]= useState([]);

  useEffect(()=>{
    fetch('recipes.json')
    .then(res=>res.json())
    .then(data=>setRecipes(data))
  },[])

  const handleWantToCook = (recipe)=>{
    const isExist = items.find(item=>item.id == recipe.id) 
    if (!isExist) {
      const newItems = [...items,recipe]
      setItems(newItems)
      
    }
    else{
      toast("Already Exist");
    }


  }
 
  

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
      recipe={recipe}
      handleWantToCook={handleWantToCook}></Recipes>)
    }
   
   </div>
    <div className='border-2  bg-base-100 shadow-xl p-11 w-1/3 '>
      <h1 className='text-xl font-semibold border-b-2 border-green-400'>Want to cook : </h1>
      <table className='p-2 '>
  <tr className='border-b-2 border-gray-300 '>
    <th className='p-2'>Name</th>
    <th className='p-2'>Time</th>
    <th className='p-2'>Calories</th>
  </tr>
  {
    items.map((item,idx)=><Sidebar key={idx}
    item={item}></Sidebar>)
  }
  
</table>

    </div>
   </div>
   
     
     
      
   <ToastContainer /> 
    </>
  )
}

export default App
