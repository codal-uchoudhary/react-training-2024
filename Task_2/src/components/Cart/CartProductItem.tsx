import React from "react";
import ProductModel from "../../Models/ProductModel";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../../Store/ShoppingCart";
import { AiOutlinePercentage } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const CartProductItem = (props: { ProductObj: ProductModel }) => {
  const cartCtx = useContext(CartContext);

  let count = null;
  for (let i of cartCtx?.items ?? []) {
    if (i.id == props.ProductObj.id) {
      count = i.count;
      break;
    }
  }

  return (
    <div className="flex w-full  mt-6  p-1 shadow-sm relative">
      <img src={props.ProductObj.thumbnail} className=" w-36 h-18 rounded-md" />
      <div className="w-1/2  ml-5 text-sm tracking-wide ">
        <div className="">{props.ProductObj.title}</div>
        <div className="">Brand: {props.ProductObj.brand}</div>
        <div className="text-sm text-orange-600">
          {props.ProductObj.discountPercentage}
          <AiOutlinePercentage className="inline" /> off
        </div>
        <div className="font-semibold pt-2">
          <BsCurrencyDollar className="inline" /> {props.ProductObj.price}
        </div>
      </div>
      <div className=" w-[70px] flex justify-evenly text-sm h-6 mt-14">
        <button className="text-xs"
          onClick={() => {
            cartCtx?.UpdateCount(props.ProductObj.id, "inc");
          }}
        >
          <FaPlus />
        </button>
        <div>{count}</div>
        <button className="text-xs"
          onClick={() => {
            cartCtx?.UpdateCount(props.ProductObj.id, "dec");
          }}
        >
          <FaMinus className="" />
        </button>
      </div>
      <button className="absolute right-1 top-1" onClick={()=>{cartCtx?.removeItemFromCart(props.ProductObj.id)}}><RxCross1/></button>
    </div>
  );
};

export default CartProductItem;
