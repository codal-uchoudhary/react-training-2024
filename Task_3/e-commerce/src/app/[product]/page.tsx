'use client'
import React, { useState, useEffect, useCallback } from "react";
import ProductCartList from "@/components/Product/ProductList";
import { Jacquard_12_Charted } from "next/font/google";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
const ProductsPage: React.FC = () => {

  const pathname = usePathname()

  console.log(pathname)

  const slug = 'laptop'

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://dummyjson.com/products/category${pathname}`);
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    if (slug) {
      fetchData();
    }
  }, [slug, fetchData]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="py-[70px]">
      <ProductCartList list={data}/>
    </div>
  );
};

export default ProductsPage;
