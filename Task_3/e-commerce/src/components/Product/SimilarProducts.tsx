'use clinet'
import React from "react";
import { useState, useEffect, useCallback } from "react";
import ProductList from "@/components/Product/ProductList";

const SimilarProduct = (props: { category: string }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/category/${props.category}`
      );
      const jsonData = await response.json();
      setData(jsonData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [props.category]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="text-base font-bold ml-10 my-10 tracking-wide ">Similar Products</div>
      <ProductList list={data} />
    </>
  );
};

export default SimilarProduct;
