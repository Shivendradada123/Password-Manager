import React from 'react'
import { Link, Links } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex   justify-between flex-col  border-gray-700  text-white">
  
  
  
  
     <div className="flex justify-center">
        <Link to='/Pass'>
  <button className="px-4 py-2 bg-white font-se  font-medium  active:scale-95 text-black rounded-lg">
    Add Password
  </button>
  </Link>
</div>

 


    </div>
  )
}

export default Home
