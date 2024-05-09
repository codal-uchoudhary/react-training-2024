import React, { ChangeEvent, useEffect } from "react";
import { useState,useRef } from "react";

type FormData = {
  username: string | null;
  password: string | null;
};

const Login = () => {


  const [formData,SetForm] = useState<FormData>({username:null,password:null})

  function onChangeHandler(event:ChangeEvent<HTMLInputElement>){
    const{name,value} = event.target;
    SetForm({...formData,[name]:value})
  }

  function submitHandler(event:React.FormEvent){
    event.preventDefault();
  }


  return (
    <div className="relative w-[500px] m-auto">
      <div className="z-30 px-6 pb-2 w-80 m-auto mt-20 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 bg-gray-400">
        <div className="text-2xl flex justify-center h-20 items-center font-semibold">
          Login Here
        </div>
        <form onSubmit={submitHandler}>
          <label className="block mt-4">Username</label>
          <input type="text" className="h-10 w-full rounded px-4 bg-gray-400 bg-opacity-40 text-sm" name="username"  value={formData.username ?? ''} onChange={(e)=> onChangeHandler(e)}></input>
          <label className="block mt-4">Password</label>
          <input type="password" className="h-10 w-full rounded px-4 bg-gray-400 bg-opacity-40 text-sm" name="password" value={formData.password ?? ''}></input>
          <button className="block mt-24 w-full h-10  rounded bg-white">
            Log In
          </button>
          <p className="text-sm m-auto text-center mt-4">not register yet? Sign Up</p>
        </form>
      </div>
      <div className="-z-10 w-[150px] h-[150px] bg-red-600 rounded-full absolute bottom-[320px] left-10 "></div>
      <div className="-z-10 w-[250px] h-[250px] bg-yellow-400 rounded-full absolute left-[250px] top-[240px]"></div>
    </div>
  );
};

export default Login;
