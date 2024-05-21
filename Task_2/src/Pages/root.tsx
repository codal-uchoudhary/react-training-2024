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
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        return;
      }
    }
    items.push({ id: id, count: 1 });
    setCart({ items: items });
  };

  const deleteItemFromCart = (id: number) => {
    const { items } = cart;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items.splice(i,1);
        console.log(items)
        setCart({ items: items });
        return;
      }
    }
  };

  const UpdateCountHandler = (id: number, operation: string) => {
    const { items } = cart;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        if (operation === "inc") {
          items[i].count++;
        } else {
          items[i].count--;
          if (items[i].count < 1) {
            deleteItemFromCart(items[i].id);
          }
        }
        break;
      }
    }
    setCart({ items: items });
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
