import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect,useCallback } from "react";
import { useParams } from "react-router-dom";
import ProductCartList from "./ProductCardList";


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
    <div className="py-[70px]">
      <ProductCartList list={data}/>
    </div>
  );
};

export default ProductsPage;
