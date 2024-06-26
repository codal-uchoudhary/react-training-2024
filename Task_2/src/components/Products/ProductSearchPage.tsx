import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import ProductCartList from "./ProductCardList";

const ProductSearchPage: React.FC = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { product } = useParams();

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${product}`
      );
      const jsonData = await response.json();
      setData(jsonData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [product]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="py-[70px]">
      <ProductCartList list={data} />
    </div>
  );
};

export default ProductSearchPage;
