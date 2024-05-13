import { createContext } from "react";
import ProductModel from "../Models/ProductModel";

interface CartContextType{
    items:{id:number,count:number}[],
    addItemToCart:(id:number)=>void,
    UpdateCount:(id:number,operation:string)=>void,
}

const CartContext = createContext<CartContextType | null>(null)

export default CartContext