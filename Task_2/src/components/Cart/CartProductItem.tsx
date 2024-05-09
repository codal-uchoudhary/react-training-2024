import React from "react";
import ProductModel from "../../Models/ProductModel";
import { BsCurrencyDollar } from "react-icons/bs";
import CartProductItemButtons from "./CaerProductItemButtons";


const CartProductItem =(props: {ProductObj: ProductModel})=>{
    return(
        <div className="flex w-[600px]  mt-6 p-4  shadow-md">
            <img src={props.ProductObj.thumbnail} className="w-24 h-18 rounded-md"/>
            <div className="w-1/2  ml-5 ">
                <div className="">{props.ProductObj.title}</div>
                <div className="text-sm text-zinc-400">{props.ProductObj.discountPercentage} off</div>
                <div className="font-semibold pt-2"><BsCurrencyDollar className="inline"/> {props.ProductObj.price}</div>
            </div>
            <CartProductItemButtons/>
        </div>
    )
}

export default CartProductItem