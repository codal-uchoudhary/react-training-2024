import React from "react";
import { useState, useEffect, useCallback } from "react";
import CartProductItem from "./CartProductItem";
import ProductModel from "../../Models/ProductModel";
import BillComponent from "./BillComponent";

const CartPage: React.FC = () => {
  const [data, setData] = useState<ProductModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const jsonData = await response.json();
      setData(jsonData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="ml-16 mt-8">
      <div className="text-4xl text-orange-600">Shopee</div>
      <div className="font-semibold pt-10 pb-4 ">checkout Items</div>
      <div className="flex justify-between">
        <div>
          {data.map((item) => (
            <CartProductItem ProductObj={item} />
          ))}
        </div>
        <BillComponent />
      </div>
    </div>
  );
};

export default CartPage;
