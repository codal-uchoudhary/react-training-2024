import React from "react";
import { useState, useEffect,useCallback } from "react";
import ProductList from "@/components/Product/ProductList";


const ProductsPage: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true)


  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`https://dummyjson.com/products/category/laptop`);
      const jsonData = await response.json();
      setData(jsonData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }finally{
      setIsLoading(false)
    }
  },[])

  useEffect(() => {fetchData();}, [fetchData]);


  if(isLoading){
    return(<h1>Loading...</h1>)
  }
  return (
    <div className="py-[70px]">
      <ProductList list={data}/>
    </div>
  );
};

export default ProductsPage;
