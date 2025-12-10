import React, { useState } from 'react';






const Passwordpage = () => {


const [password, setpassword] = useState("")

const Passwordgen =() =>{

const letter = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstubwxyz0123456789!@#$%&*()"

let pass = "";

for(let i = 0; i<10; i++){
    pass += letter[Math.floor(Math.random()*letter.length)]
}
setpassword(pass)

}














  return (
    <div className="flex h-screen w-full justify-center items-center text-white">

      <div className="flex flex-col justify-center items-center border border-gray-500 
                      w-full max-w-[700px] min-h-[300px] rounded-xl p-10 bg-black/30 gap-5">

        <form className="w-full  flex flex-col gap-5">
            <label  className='font-medium'> Platform name / Service </label>
          <input     required
            type="text"
            placeholder="Enter your platform/Service"
            className="w-full p-3 rounded-lg bg-black/20 border border-gray-500"
          />
          <label  className='font-medium'> UserName/ PhoneNmber</label>
          <input
            type="text"  required
            placeholder="Enter your platform/Service"
            className="w-full p-3 rounded-lg bg-black/20 border border-gray-500"
          />
          <label  className='font-medium'> Password </label>
          <input
            type="text"  required value={password} onChange={(e)=>setpassword(e.target.value)}
            placeholder="Enter your platform/Service"
            className="w-full p-4 rounded-lg bg-black/20 border border-gray-500"
          />
          <button type='button'    onClick={Passwordgen}    className="px-2 py-2  active:scale-95 bg-blue-500 rounded-lg text-white" >Genrate</button>
          <button className='w-full active:scale-95   bg-white rounded-2xl  py-3 font-medium text-black'>Save Password</button>
         
        </form>

      </div>

    </div>
  );
};

export default Passwordpage;
