import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect,useCallback } from "react";

const ProductList: React.FC = () => {
  const [data, setData] = useState([]);


  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const jsonData = await response.json();
      setData(jsonData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },[])

  useEffect(() => {fetchData();}, [fetchData]);


  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-x-24 gap-y-16 px-[50px] py-[100px]">
      {data.map((item) => (
        <ProductCard  productObj={item}/>
      ))}
    </div>
  );
};

export default ProductList;
