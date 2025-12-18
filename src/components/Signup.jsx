import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signuppage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [toast, setToast] = useState("")
  const navigate = useNavigate();

  // signup btn ke liye  fnc
  const handlePage = () => {
    if (!email || !password) {
      showToast("Please fill all details")
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address")
      return;
    }

    // Data get karane ke lie localstorage se

    const users = JSON.parse(localStorage.getItem("Users")) || [];

    // agar user hai to check karne ke liye
    const exist = users.some((u) => u.email === email);
    if (exist) {
      showToast("user is already ragister")
      return;
    }

    const newUser = { email, password };

    users.push(newUser);
    localStorage.setItem("Users", JSON.stringify(users));
    showToast("Signup success")
    navigate("/");
  };

  const showToast =(msg)=>{

    setToast(msg)
     setTimeout(() => {
      setToast("")
     }, 3000);


  }

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
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder=" Eg - Shivnedrapulser09@gmail.com"
          className="w-full bg-black/20 mt-2 p-3 border border-gray-600 rounded-xl text-white mb-6"
        />

        <label className="text-gray-300 text-sm">Password</label>
        <input
          required
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder=" Eg - Shivendra@#$#1232"
          className="w-full bg-black/20 mt-2 p-3 border border-gray-600 rounded-xl text-white mb-6"
        />

        <button
          onClick={handlePage}
          className="w-full py-3  active:scale-95   bg-white text-black font-medium rounded-2xl"
        >
          SignUp
        </button>
        {toast && (
  <div className="fixed top-5 right-5 bg-red-600  text-white px-6 py-3 rounded-xl border border-gray-600 shadow-lg animate-pulse">
    {toast}
  </div>
)}

      </div>
    </div>
  );
};

export default Signuppage;
