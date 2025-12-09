import React from 'react'

const Loginpage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">

  
      <div className="max-w-xl w-full bg-black/20 border border-gray-700 p-8 rounded-3xl shadow-lg">

    
        <button className="w-full py-3 bg-white rounded-2xl text-black font-medium flex justify-center items-center gap-2">
         
          Continue with Google
        </button>

    
        <div className="flex items-center gap-4 my-6">
          <hr className="flex-1 border-gray-600" />
          <span className="text-gray-400">or</span>
          <hr className="flex-1 border-gray-600" />
        </div>

        
        <label className="text-gray-300 text-sm">Email Address</label>
        <input 
          type="email"
          placeholder="Enter your email address"
          className="w-full bg-black/20 mt-2 p-3 border border-gray-600 rounded-xl text-white mb-6"
        />


        <label className="text-gray-300 text-sm">Password</label>
        <input 
          type="password"
          placeholder="Enter your password"
          className="w-full bg-black/20 mt-2 p-3 border border-gray-600 rounded-xl text-white mb-6"
        />

      
        <button className="w-full py-3 bg-white text-black font-medium rounded-2xl">
          Sign In
        </button>

        
        <p className="text-center text-gray-400 mt-4">
          Don’t have an account? <span className="text-white cursor-pointer underline">Sign Up</span>
        </p>

      </div>

    </div>
  )
}

export default Loginpage
