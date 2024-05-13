import React from "react";
import ProductModel from "../../Models/ProductModel";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../../Store/ShoppingCart";

const CartProductItem = (props: { ProductObj: ProductModel }) => {


    const cartCtx = useContext(CartContext);

    let count = null;
    for (let i of cartCtx?.items ?? []){
        if(i.id==props.ProductObj.id){
            count = i.count;
            break;
        }
    }


  return (
    <div className="flex w-[600px]  mt-6 p-4  shadow-md">
      <img src={props.ProductObj.thumbnail} className="w-24 h-18 rounded-md" />
      <div className="w-1/2  ml-5 ">
        <div className="">{props.ProductObj.title}</div>
        <div className="text-sm text-zinc-400">
          {props.ProductObj.discountPercentage} off
        </div>
        <div className="font-semibold pt-2">
          <BsCurrencyDollar className="inline" /> {props.ProductObj.price}
        </div>
      </div>
      <div className=" w-[100px] flex flex-col justify-evenly">
        <div className="flex justify-evenly text-sm">
          <button onClick={()=>{cartCtx?.UpdateCount(props.ProductObj.id,"inc")}}>
            <FaPlus className="text-orange-600" />
          </button>
          {count}
          <button onClick={()=>{cartCtx?.UpdateCount(props.ProductObj.id,"dec")}}>
            <FaMinus className="text-orange-600" />
          </button>
        </div>
        <div className="flex justify-evenly mt-2 text-zinc-400 text-1xl">
          <button>
            <MdDeleteForever className="inline" />
          </button>
          <button>
            <MdModeEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
