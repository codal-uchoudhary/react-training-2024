import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect,useCallback } from "react";
import { useParams } from "react-router-dom";


const ProductsPage: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true)

  const {category} = useParams();

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`https://dummyjson.com/products/category/${category}`);
      const jsonData = await response.json();
      setData(jsonData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }finally{
      setIsLoading(false)
    }
  },[category])

  useEffect(() => {fetchData();}, [fetchData]);


  if(isLoading){
    return(<h1>Loading...</h1>)
  }
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-x-24 gap-y-16 px-[50px] py-[100px]">
      {data.map((item) => (
        <ProductCard  productObj={item}/>
      ))}
    </div>
  );
};

export default ProductsPage;
