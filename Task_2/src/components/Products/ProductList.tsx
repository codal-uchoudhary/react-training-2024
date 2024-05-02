import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const ProductList: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const jsonData = await response.json();
        setData(jsonData.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      {data.map((item) => (
        <ProductCard productObj={item}/>
      ))}
    </div>
  );
};

export default ProductList;
