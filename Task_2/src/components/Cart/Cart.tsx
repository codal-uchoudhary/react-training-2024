import React from "react";
import { useState, useEffect, useCallback, useContext } from "react";
import CartProductItem from "./CartProductItem";
import ProductModel from "../../Models/ProductModel";
import BillComponent from "./BillComponent";
import CartContext from "../../Store/ShoppingCart";
import { DiJava } from "react-icons/di";
import ProductList from "../Products/ProductList";
import CartProductList from "./CartProductList";

const CartPage: React.FC = () => {
  const cartCtx = useContext(CartContext);

  const [data, setData] = useState<ProductModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {    
    try{
      const response = await Promise.all(cartCtx?.items.map(url=>fetch(`https://dummyjson.com/products/${url.id}`)))
      const responseData = await Promise.all(response.map(response => response.json()));
      setData(responseData)
    }catch(error){
      console.error("Error fetching data:", error);
    }finally{
      setIsLoading(false);
    }
  }, [cartCtx]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const checkoutHading1 = `CHECKOUT ITEMS (${data.length})`;

  return (
    <div className="w-4/5 m-auto pt-6 px-4 mb-32">
      <div className="font-semibold text-sm tracking-wide">
        {checkoutHading1}
      </div>
      <div className="flex justify-between mt-6">
        <div className="w-3/5 pr-4 border-r">
          <div className="flex justify-between h-16 border rounded items-center px-4 bg-orange-50 text-sm tracking-wide font-semibold">
            <p>check terms and policies for delivery</p>
            <button className="border w-28 text-center align-top h-8 text-xs font-semibold text-orange-600 border-1 border-orange-600">CHECK HERE</button>
          </div>
          <CartProductList ListOfItem={data}/>
        </div>
        <BillComponent productList={data} />
      </div>
    </div>
  );
};

export default CartPage;
