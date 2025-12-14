import React from 'react'
import { Link, Links } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex   justify-between flex-col  gap-7 border-gray-700  text-white">
  
  
  
  
     <div className="flex justify-center gap-7">
        <Link to='/Pass'>
  <button className="px-4 py-2 bg-white font-se  font-medium gap-5 active:scale-95 text-black rounded-lg">
    Add Password
  </button>
  </Link>
</div>

 


    </div>
  )
}

export default Home
