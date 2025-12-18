import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="w-full bg-gray-900 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between text-white">
        <h1 className="text-3xl font-bold tracking-wide text-white ">
          Password Manager
        </h1>

        <div className="flex items-center    gap-8">
       <input
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyUp={(e) => {
    if (e.key === "Enter") {
      console.log("Search value:", e.target.value);
    }
  }}
  type="text"
  placeholder="Search password"
  className="px-4 py-1.5 rounded-full bg-gray-800 border border-gray-600 text-sm outline-none focus:ring-2 focus:ring-blue-500"
/>


          <button className="px-4 py-1.5 rounded-full border active:scale-95 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition">
            Search
          </button>

          <Link to="/">
            <button className="px-4 py-1.5 rounded-full active:scale-95 border border-gray-500 hover:bg-white hover:text-black transition">
              Sign in
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-4 py-1.5 active:scale-95  rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
