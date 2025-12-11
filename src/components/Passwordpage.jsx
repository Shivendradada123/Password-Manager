import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Passwordpage = () => {
  const [password, setpassword] = useState("");
  const [Platform, setPlatform] = useState("");
  const [Username, setUsername] = useState("");
  const [SavedData, setSavedData] = useState([]);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("Password")) || [];
    setSavedData(getData);
  }, []);

  const Passwordgen = () => {
    const letter =
      "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstubwxyz0123456789!@#$%&*()";
    let pass = "";
    for (let i = 0; i < 10; i++) {
      pass += letter[Math.floor(Math.random() * letter.length)];
    }
    setpassword(pass);
  };

  const handlesave = (e) => {
    e.preventDefault();
    const newEntry = { Platform, Username, password };
    const updated = [...SavedData, newEntry];
    setSavedData(updated);
    localStorage.setItem("Password", JSON.stringify(updated));
    setPlatform("");
    setpassword("");
    setUsername("");
  };

  const deleteItem = (index) => {
    const updated = SavedData.filter((_, i) => i !== index);
    setSavedData(updated);
    localStorage.setItem("Password", JSON.stringify(updated));
  };

  return (
    <div className="flex flex-col items-center py-10 min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="w-full max-w-[700px] bg-black/30 p-10 rounded-xl border border-gray-700">

        <form onSubmit={handlesave} className="flex flex-col gap-5">

          <label className="font-medium">Platform / Service</label>
          <input
            required
            value={Platform}
            placeholder="Eg - phonepe"
            onChange={(e) => setPlatform(e.target.value)}
            className="bg-black/30 p-3 rounded-lg border border-gray-500"
          />

          <label className="font-medium">Username / Phone</label>
          <input
            required
            value={Username}
            placeholder="Eg - Shivendrapulser01@gmail.com"
            onChange={(e) => setUsername(e.target.value)}
            className="bg-black/30 p-3 rounded-lg border border-gray-500"
          />

          <label className="font-medium">Password</label>
          
          {/* 👁 PASSWORD INPUT WITH EYE ICON */}
          <div className="relative">
            <input
              required
              type={showPass ? "text" : "password"}
              value={password}
              placeholder="Shivendra@123456"
              onChange={(e) => setpassword(e.target.value)}
              className="bg-black/30 p-3 rounded-lg border border-gray-500 w-full pr-12"
            />

            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-3 cursor-pointer text-xl"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="button"
            onClick={Passwordgen}
            className="bg-blue-600 py-3 rounded-lg active:scale-95"
          >
            Generate Password
          </button>

          <button
            type="submit"
            className="bg-white text-black py-3 rounded-lg active:scale-95"
          >
            Save Password
          </button>
        </form>
      </div>

      <div className="w-full max-w-[750px] mt-10 bg-white/5 p-8 rounded-xl border border-gray-700 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Saved Passwords</h2>

        {SavedData.length === 0 && (
          <p className="text-gray-400">No passwords saved yet.</p>
        )}

        {SavedData.map((item, index) => (
          <div
            key={index}
            className="bg-black/30 p-5 rounded-lg border border-gray-600 mb-4 flex justify-between"
          >
            <div>
              <p><b>Platform:</b> {item.Platform}</p>
              <p><b>Username:</b> {item.Username}</p>
              <p><b>Password:</b> {item.password}</p>
            </div>

            <button
              onClick={() => deleteItem(index)}
              className="bg-red-600 px-3 w-16 h-10 rounded-md text-sm active:scale-95"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Passwordpage;
