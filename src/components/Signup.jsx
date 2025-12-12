import React from "react";
import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="max-w-xl w-full bg-[#0f0f0f] border border-gray-700 p-8 rounded-3xl shadow-lg">
        <button className="w-full py-3 bg-white rounded-2xl text-black font-medium flex justify-center items-center gap-2">
          Continue with Basics Details
        </button>

        <div className="flex items-center gap-4 my-6">
          <hr className="flex-1 border-gray-600" />
          <span className="text-gray-400">Welcome</span>
          <hr className="flex-1 border-gray-600" />
        </div>

        <label className="text-gray-300 text-sm">Email Address / Phone number</label>
        <input
          required
          type="email"
          placeholder=" Eg - 6261647208"
          className="w-full bg-black/20 mt-2 p-3 border border-gray-600 rounded-xl text-white mb-6"
        />

        <label className="text-gray-300 text-sm">Password</label>
        <input
          required
          type="password"
          placeholder=" Eg - Shivendra@#$#1232"
          className="w-full bg-black/20 mt-2 p-3 border border-gray-600 rounded-xl text-white mb-6"
        />

        <Link to="/" className="w-full block">
          <button className="w-full py-3  active:scale-95   bg-white text-black font-medium rounded-2xl">
            SignUp
          </button>
        </Link>

        
      </div>
    </div>
  );
};

export default Loginpage;
