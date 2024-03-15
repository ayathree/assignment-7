
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import './App.css'

function App() {
  

  return (
    <>
     
      <nav>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <h1 className=" text-3xl font-bold ">Recipe Calories</h1>
  </div>
  <div className="navbar-center hidden lg:flex  gap-5">
    <a className="font-semibold">Home</a>
    <a className="font-semibold">Recipe</a>
    <a className="font-semibold">About</a>
    <a className="font-semibold">Search</a>
  </div>
  <div className="navbar-end flex-none gap-2 ">
    <div className="form-control relative hidden lg:block">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto p-7 " />
      <FaSearch className="absolute top-3 m-3" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-green-400 ">
        <div className="w-10 rounded-full">
        <FaRegUserCircle className="text-4xl"/>
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 block lg:hidden ">
        <li><a> Home</a></li>
        <li><a>Recipe</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
  </div>
</div>
      </nav>
      
     
    </>
  )
}

export default App
