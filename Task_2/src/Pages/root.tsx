import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar/Navbar"
import CartContext from "../Store/ShoppingCart";
import { useState } from "react";

const RootLayout: React.FC = () => {

  const [cart,setCart] = useState<{items:{id:number,count:number}[]}>({items:[]})

  const addItemToCartHandler=(id:number)=>{
    const {items} = cart
    for (let i=0;i<items.length;i++){
      if(items[i].id===id){
        return;
      }
    }
    items.push({id:id,count:1});
    setCart({items:items})
  }

  const UpdateCountHandler=(id:number,operation:string)=>{
    const {items} = cart;
    for (let i=0;i<items.length;i++){
      if(items[i].id===id){
        if(operation==="inc"){items[i].count++;}
        else{items[i].count--;}
        break;
      }
    }
    setCart({items:items});
  }


  const ctxValue = {
    items:cart.items,
    addItemToCart:addItemToCartHandler,
    UpdateCount:UpdateCountHandler
  }


  return (
    <CartContext.Provider value={ctxValue}>
      <Navbar />
      <Outlet />
    </CartContext.Provider>
  );
};

export default RootLayout;
