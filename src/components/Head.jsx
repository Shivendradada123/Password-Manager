import React from 'react'

const Head = () => {
  return ( 
    <div className='flex justify-center   bg-gradient-to-b from-black to-gray-900'>
      <div className='flex flex-col   items-center text-center m-6 py-1'>

        <button className='px-4 rounded-xl font-bold w-16 h-10 bg-white'>
          PM
        </button>

        <div className='flex flex-col mt-3 gap-7'>
          <h1 className='text-4xl text-white/90'>Pass secure</h1>
          <h2   className='text-3xl text-white/80'>Welcome to your vault</h2>
        </div>

      </div>
    </div>
  )
}

export default Head
