import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Loginpage = () => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const usenavigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all detail");
      return;
    }

    const users = JSON.parse(localStorage.getItem("Users")) || [];

    const userFind = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!userFind) {
      alert("User does not exist");
      return;
    }

    alert("Login Success");

    localStorage.setItem("loggeduser", JSON.stringify(userFind));

    usenavigate("/home");
  };

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

        <label className="text-gray-300 text-sm">Email Address</label>
        <input
          required
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Enter your email address"
          className="w-full bg-black/20 mt-2 p-3 border border-gray-600 rounded-xl text-white mb-6"
        />

        <label className="text-gray-300 text-sm">Password</label>
        <input
          required
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="w-full bg-black/20 mt-2 p-3 border border-gray-600 rounded-xl text-white mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 active:scale-95 bg-white text-black font-medium rounded-2xl"
        >
          Sign In
        </button>

        <p className="text-center text-gray-400 mt-4">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>

      </div>
    </div>
  );
};

export default Loginpage;
