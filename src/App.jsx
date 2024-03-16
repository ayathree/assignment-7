


import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'

import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes';
import Sidebar from './components/Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Current from './components/Current/Current';



function App() {
  const [recipes, setRecipes]= useState([]);
  const [items, setItems]= useState([]);
  const [samples, setSamples]=useState([]);

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

  const handlePreparing=(id,recipe)=>{
    const currentAdd = items.filter(item=>item.id !=id);
    setItems(currentAdd);
    const newCurrent = [...samples,recipe]
    setSamples(newCurrent)
    
  }

 
  

  return (
    <>
   
    <Navbar></Navbar>
    <Banner></Banner>

    
    
    
    <div>
      <h1 className='text-3xl font-semibold'>Our Recipes</h1>
      <p>Here you can find six of our popular dishes as a beginner learner. You can select any one or more items that you want to cook </p>
    </div>

    <div className='flex lg:flex-row flex-col justify-between gap-10 '>
   <div className='grid lg:grid-cols-2 grid-cols-1 gap-7 lg:w-2/3 '>
    {
      recipes.map(recipe=><Recipes key={recipe.id}
      recipe={recipe}
      handleWantToCook={handleWantToCook}></Recipes>)
    }
   
   </div>
    <div className='border-2  bg-base-100 shadow-xl p-11 lg:w-1/3 '>
      <h1 className='text-xl font-semibold border-b-2 border-green-400'>Want To Cook : 0{items.length}</h1>
      <table className='lg:p-2 '>
  <tr className='border-b-2 border-gray-300 '>
    <th className='lg:p-2 text-xs lg:text-lg p-3'>Name</th>
    <th className='lg:p-2 text-xs lg:text-lg p-3'>Time</th>
    <th className='lg:p-2 text-xs lg:text-lg p-3'>Calories</th>
  </tr>
  {
    items.map((item,idx)=><Sidebar key={idx}
    item={item}
    handlePreparing={handlePreparing}></Sidebar>)
  }

  
</table>
<h1 className='text-xl font-semibold border-b-2 border-green-400 mt-5'>Current Cooking: 0{samples.length}</h1>
<table >
  <tr className=' border-b-2 border-gray-300 '>
    <th className='lg:p-6 text-xs lg:text-lg'>Name</th>
    <th className='lg:p-6 text-xs lg:text-lg'>Time</th>
    <th className='lg:p-6 text-xs lg:text-lg'>Calories</th>
  </tr>
  {
    samples.map((sample,idx)=><Current key={idx}
    sample={sample}></Current>)
  }
  
  </table>

    </div>
    
   </div>
   
     
     
      
   <ToastContainer /> 
    </>
  )
}

export default App
