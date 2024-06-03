import React, { useState,ChangeEvent, KeyboardEvent } from "react";
import { GoSearch } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from "./../../assets/pngwing.com.png";
import { Link } from "react-router-dom";
import CartContext from "../../Store/ShoppingCart";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationContext from "../../Store/Authentication";

const Navbar: React.FC = () => {

  const navigate = useNavigate();

  const [filterIsOpen,serFilterIsOpen] = useState(false)
  const [searchInput,setSearchInout] = useState("");

  const cartCtx = useContext(CartContext);
  const AuthCtx = useContext(AuthenticationContext);

  const numberOfCartItems = cartCtx?.items.length;

  function filterHandler(category:string){
    navigate(`/products/category/${category}`)
  }

  function InputChangeHandler(event:ChangeEvent<HTMLInputElement>){
    setSearchInout(event.target.value)
  }

  function HandleKeyPress(event:KeyboardEvent<HTMLInputElement>){
    if(event.key === 'Enter'){
      navigate(`/products/search/${searchInput}`)
    }
  }



  return (
    <div className="flex px-4 h-[80px] shadow-md text-xs font-bold text-zinc-600 tracking-wider">
      <div className="basis-7/12  flex justify-left items-center">
        <div>
          <img src={Logo} className="w-[60px] h-[40px]" />
        </div>
        <Link to="/" className="text-center  pl-8  ml-2 hover:text-red-600">
          HOME
        </Link>
        <Link to="/products/category/laptops" className="text-center  pl-8 hover:text-yellow-600">
          LAPTOPS
        </Link>
        <Link to="/products/category/smartphones" className="text-center  pl-8 hover:text-green-600">
          SMART PHONES
        </Link>
        <Link to="/products/category/skincare" className="text-center  pl-8 hover:text-orange-600">
          SKIN CARES
        </Link>
        <button className="text-center  pl-8 hover:text-black relative" onClick={()=>{serFilterIsOpen(!     IsOpen)}}>
          FILTER <IoMdArrowDropdown className="inline text-sm"/>
          {filterIsOpen && (
            <div className="absolute w-[130px] bg-slate-100 rounded-sm mt-2 z-10">
              <button className="h-[30px] hover:bg-slate-200 w-full" onClick={()=>{filterHandler("smartphones")}}>SMART PHONES</button>
              <button className="h-[30px] hover:bg-slate-200 w-full" onClick={()=>{filterHandler("laptops")}}>LAPTOPS</button>
              <button className="h-[30px] hover:bg-slate-200 w-full" onClick={()=>{filterHandler("fragrances")}}>FRAGNANCE</button>
              <button className="h-[30px] hover:bg-slate-200 w-full" onClick={()=>{filterHandler("skincare")}}>SKINCARE</button>
              <button className="h-[30px] hover:bg-slate-200 w-full" onClick={()=>{filterHandler("groceries")}}>GROCERIES</button>
              <button className="h-[30px] hover:bg-slate-200 w-full" onClick={()=>{filterHandler("home-decoration")}}>HOME DECORATION</button>
            </div>
          )}
        </button>
      </div>
      <div className="basis-3/12 py-5 flex justify-end">
        <div className="w-full text-sm font-normal h-8 bg-zinc-50 rounded-sm py-1">
          <GoSearch className="inline mx-4"/>
          <input
            className="focus:outline-none bg-transparent"
            placeholder="Search here any product"
            value={searchInput}
            onChange={InputChangeHandler}
            onKeyPress={HandleKeyPress}
          />
        </div>
      </div>
      <div className="basis-2/12 py-5 flex justify-evenly">
        {AuthCtx?.isAuthenticated==="true"? <Link to="/login" className="hover:text-green-600">
          <IoPersonAddOutline className="w-full m-auto text-lg mb-1"/>
          Account
        </Link>:  <Link to="/login" className="hover:text-green-600">
          <IoPersonAddOutline className="w-full m-auto text-lg mb-1"/>
          SignIn
        </Link>}
        <Link
          to="/cart"
          className="hover:text-orange-600"
        >
          <BsCart2 className="w-full m-auto text-lg mb-1"/>
          Cart {numberOfCartItems}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
