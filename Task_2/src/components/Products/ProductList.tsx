import React from "react";
import { useState, useEffect, useCallback } from "react";
import ProductCartList from "./ProductCardList";

const ProductList: React.FC = () => {
  const [data, setData] = useState([]);
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

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="py-[100px]">
      <ProductCartList list={data} />
    </div>
  );
};

export default ProductList;
