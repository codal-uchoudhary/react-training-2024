import React from "react";
import { GoSearch } from "react-icons/go";
import { RiShoppingCartLine } from "react-icons/ri";
import Logo from "./../../assets/pngwing.com.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="flex px-4 h-[70px] shadow-md">
      <div className="basis-2/5  flex justify-left py-5">
        <div>
          <img src={Logo} className="w-[60px] h-[40px]" />
        </div>
        <Link to="/" className="w-[100px] text-center hover:font-semibold">
          Home
        </Link>
        <Link to="/about" className="w-[100px] text-center hover:font-semibold">
          About
        </Link>
        <Link to="/contact" className="w-[100px] text-center hover:font-semibold">
          Contact
        </Link>
        <Link to="" className="w-[100px] text-center hover:font-semibold">
          Help
        </Link>
      </div>
      <div className="basis-2/5 py-5 flex justify-end">
        <input
          className="rounded-sm w-[250px] border border-gray-500 px-2 text-sm"
          placeholder="search here"
        />
      </div>
      <div className="basis-1/5 py-5 flex justify-end">
        <Link to="/login" className="w-[100px] text-center hover:font-semibold">
          SignIn
        </Link>
        <Link to="" className="w-[100px] text-center hover:font-semibold">
          SignUp
        </Link>
        <Link to="/cart" className="w-[100px] text-center hover:font-semibold">
          Cart <RiShoppingCartLine className=" inline font-semibold "/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
