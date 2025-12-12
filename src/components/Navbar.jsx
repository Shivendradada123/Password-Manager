import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
       <div className='bg-gray-800 text-white flex justify-center  border-b boder-gray-700  p-3'>
 
            <div className=' w-full flex items-center  justify-between '>
              <h1  className='text-2xl'>Password Manager</h1>
             
              
            <div className='gap-7 flex items-center'>
                <input  type="text" placeholder='Search Password'  className='rounded-2xl px-3 py-1 text-white border border-white-'   />
            <button className='rounded-2xl  py-1 px-1 font-medium border  hover:bg-white hover:text-black border-white' >Search</button>
            <Link to='/'><button className='rounded-2xl  hover:bg-white hover:text-black py-1.5 px-4 font-medium border border-white' >Sign in</button></Link>
            <Link to= '/signup'><button  className='rounded-2xl   py-1.5 px-4 border   hover:bg-white hover:text-black font-medium border-white text-white' >Sign up</button>
  </Link>
            </div>

               </div>


        </div>
  )
}

export default Nav