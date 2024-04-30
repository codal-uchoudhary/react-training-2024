import React from "react";
import { GoSearch } from "react-icons/go";
import Logo from "./../../assets/pngwing.com.png"

const Navbar: React.FC = () => {


  return (
    <div className="flex px-4 h-[70px] shadow-md">
      <div className="basis-2/5  flex justify-left py-5">
        <div><img src={Logo} className="w-[60px] h-[40px]"/></div>
        <a className="w-[100px] text-center hover:font-semibold" href="#">Home</a>
        <a className="w-[100px] text-center hover:font-semibold" href="#">About</a>
        <a className="w-[100px] text-center hover:font-semibold" href="#">Contact</a>
        <a className="w-[100px] text-center hover:font-semibold" href="#">Help</a>
      </div>
      <div className="basis-2/5 py-5 flex justify-end">
        <input className="rounded-sm w-[250px] border border-gray-500 px-2 text-sm" placeholder="search here"/>
      </div>
      <div className="basis-1/5 py-5 flex justify-end">
        <a className="w-[100px] text-center hover:font-semibold" href="#">SignIn</a>
        <a className="w-[100px] text-center hover:font-semibold" href="#">SignUp</a>
      </div>
    </div>
  );
};

export default Navbar;
