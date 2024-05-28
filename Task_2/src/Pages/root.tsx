import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import CartContext from "../Store/ShoppingCart";
import AuthenticationContext from "../Store/Authentication";
import { useState } from "react";

const RootLayout: React.FC = () => {
  const [cart, setCart] = useState<{ items: { id: number; count: number }[] }>({
    items: [],
  });

  const [authData, setAuthData] = useState<{
    isAuthenticated: string | null;
    token: string | null;
  }>({
    isAuthenticated: localStorage.getItem("isAuthenticated"),
    token: localStorage.getItem("token"),
  });

  const addItemToCartHandler = (id: number) => {
    const { items } = cart;
    let filteredCart = items.filter((item) => id===item.id)
    if (filteredCart.length==0) {
      items.push({ id: id, count: 1 });
      setCart({ items: items });
    }
    return;
  };

  const deleteItemFromCart = (id: number) => {
    const { items } = cart;
    let filterItem = items.filter((item) => item.id != id);
    console.log(filterItem);
    setCart({ items: filterItem });
  };

  const UpdateCountHandler = (id: number, operation: string) => {
    const { items } = cart;
    let item_with_count_zero = null;
    let newItems = items.map((item)=>{
      if(item.id===id){
        if(operation=="inc"){
          item.count++;
        }else{
          item.count--;
        }
      }
      if(item.count<1){
        item_with_count_zero=item.id
      }
      return item;
    })
    if(item_with_count_zero){
      deleteItemFromCart(item_with_count_zero)
    }else{
      setCart({items:newItems})
    }
  };

  const ctxValue = {
    items: cart.items,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: deleteItemFromCart,
    UpdateCount: UpdateCountHandler,
  };

  function handleAuthData(isAuthenticated: string, token: string) {
    setAuthData({ isAuthenticated, token });
  }

  const AuthCtx = {
    isAuthenticated: authData.isAuthenticated,
    AuthToken: authData.token,
    setAuthenticatoin: handleAuthData,
  };

  return (
    <CartContext.Provider value={ctxValue}>
      <AuthenticationContext.Provider value={AuthCtx}>
        <Navbar />
        <Outlet />
      </AuthenticationContext.Provider>
    </CartContext.Provider>
  );
};

export default RootLayout;
