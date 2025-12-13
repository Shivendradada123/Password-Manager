import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Passwordpage = () => {
  const [password, setpassword] = useState("");
  const [Platform, setPlatform] = useState("");
  const [Username, setUsername] = useState("");
  const [SavedData, setSavedData] = useState([]);
  const [showPass, setShowPass] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [toast, setToast] = useState("");

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

    if (editIndex !== null) {
      const updated = [...SavedData];
      updated[editIndex] = { Platform, Username, password };
      setSavedData(updated);
      localStorage.setItem("Password", JSON.stringify(updated));
      setEditIndex(null);
    } else {
      const newEntry = { Platform, Username, password };
      const updated = [...SavedData, newEntry];
      setSavedData(updated);
      localStorage.setItem("Password", JSON.stringify(updated));
    }

    setPlatform("");
    setUsername("");
    setpassword("");
  };

  const deleteItem = (index) => {
    const updated = SavedData.filter((_, i) => i !== index);
    setSavedData(updated);
    localStorage.setItem("Password", JSON.stringify(updated));
  };

  const editItem = (index) => {
    const item = SavedData[index];
    setPlatform(item.Platform);
    setUsername(item.Username);
    setpassword(item.password);
    setEditIndex(index);
  };

  const copyPassword = (pass) => {
    navigator.clipboard.writeText(pass);
    setToast("Password copied successfully!");
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div className="flex flex-col items-center py-10 min-h-screen text-white">

      {toast && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {toast}
        </div>
      )}

      <div className="w-full max-w-[700px] bg-black/30 p-10 rounded-xl border border-gray-700">
        <form onSubmit={handlesave} className="flex flex-col gap-5">
          <label>Platform / Service</label>
          <input
            required
            value={Platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="bg-black/30 p-3 rounded-lg border border-gray-500"
            placeholder="Eg - PhonePe"
          />

          <label>Username / Phone</label>
          <input
            required
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-black/30 p-3 rounded-lg border border-gray-500"
            placeholder="Eg - email / phone"
          />

          <label>Password</label>
          <div className="relative">
            <input
              required
              type={showPass ? "text" : "password"}
              value={password}
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
            className="bg-blue-600 py-3 rounded-lg"
          >
            Generate Password
          </button>

          <button
            type="submit"
            className="bg-white text-black py-3 rounded-lg"
          >
            {editIndex !== null ? "Update Password" : "Save Password"}
          </button>
        </form>
      </div>

      <div className="w-full max-w-[750px] mt-10 bg-white/5 p-8 rounded-xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6">Saved Passwords</h2>

        {SavedData.map((item, index) => (
          <div
            key={index}
            className="bg-black/30 p-5 rounded-lg border border-gray-600 mb-4 flex justify-between items-center"
          >
            <div>
              <p><b>Platform:</b> {item.Platform}</p>
              <p><b>Username:</b> {item.Username}</p>
              <p><b>Password:</b> {item.password}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => copyPassword(item.password)}
                className="bg-green-600 px-3 h-10 rounded-md text-sm"
              >
                Copy
              </button>

              <button
                onClick={() => editItem(index)}
                className="bg-yellow-500 text-black px-3 h-10 rounded-md text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => deleteItem(index)}
                className="bg-red-600 px-3 h-10 rounded-md text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Passwordpage;
