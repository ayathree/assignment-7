


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
      <h1 className='text-3xl font-semibold mt-12'>Our Recipes</h1>
      <p className='mb-12'>Here you can find six of our popular dishes as a beginner learner. You can select any one or more items that you want to cook </p>
    </div>

    <div className='flex lg:flex-row flex-col justify-between gap-10 '>
   <div className='grid lg:grid-cols-2 grid-cols-1 gap-7  '>
    {
      recipes.map(recipe=><Recipes key={recipe.id}
      recipe={recipe}
      handleWantToCook={handleWantToCook}></Recipes>)
    }
   
   </div>
    <div>
      
      <table className='border-2 shadow-xl  '>
        <tr>
          <th className='text-xl font-semibold border-b-2 border-green-400 p-10' colSpan={4}> Want To Cook : 0{items.length}</th>
         </tr>
  <tr className='border-b-2 border-gray-300  '>
    <th className='lg:p-2 text-xs p-3  '>Name</th>
    <th className='lg:p-2 text-xs p-3  '>Time</th>
    <th className='lg:p-2 text-xs p-3  '>Calories</th>
    <th className='lg:p-2 text-xs p-3  '>Action</th>
  </tr>
  {
    items.map((item,idx)=><Sidebar key={idx}
    item={item}
    handlePreparing={handlePreparing}></Sidebar>)
  }

  <tr>
    <th className='text-xl font-semibold border-b-2 border-green-400 p-10 ' colSpan={4}>Current Cooking: 0{samples.length}</th>
  </tr>



  <tr className=' border-b-2 border-gray-300 '>
    <th className='lg:p-6 text-xs p-2 ' colSpan={2}>Name</th>
    <th className='lg:p-6 text-xs p-2 '>Time</th>
    <th className='lg:p-6 text-xs p-2 '>Calories</th>
  </tr>
  {
    samples.map((sample,idx)=><Current key={idx}
    sample={sample}></Current>)
  }

  <tr>
    <th colSpan={2}></th>
    <th  className='p-5 '>Total Time:</th>
    <th  className='p-5 '>Total Calories:</th>

  </tr>
  <tr>
    <td colSpan={2}></td>
    <td className='text-xs p-4'>{samples.reduce((p,c)=>p+c.preparing_time, 0)} min</td>
    <td className='text-xs p-4'>{samples.reduce((p,c)=>p+c.calories, 0)} calories</td>
  </tr>
  
  </table>

    </div>
    
   </div>
   
     
     
      
   <ToastContainer /> 
    </>
  )
}

export default App
