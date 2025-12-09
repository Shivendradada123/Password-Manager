import React from 'react'

const Nav = () => {
  return (
       <div className='bg-gray-800 text-white flex justify-center  p-3'>
 
            <div className=' w-full flex items-center  justify-between '>
              <h1  className='text-2xl'>Password Manager</h1>
             
              
            <div className='gap-7 flex items-center'>
                <input  type="text" placeholder='Search Password'  className='rounded-2xl px-3 py-1 text-white border border-white-'   />
            <button className='rounded-2xl  py-1 px-1 font-medium border border-white' >Search</button>
            <button className='rounded-2xl  py-1.5 px-4 font-medium border border-white' >Sign in</button>
            <button  className='rounded-2xl   py-1.5 px-4 border font-medium border-white bg-white text-black' >Sign up</button>
 
            </div>

               </div>


        </div>
  )
}

export default Nav