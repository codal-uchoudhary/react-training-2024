import React from "react";
import { useState, useEffect,useCallback } from "react";
import ProductModel from "../../Models/ProductModel";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";
import ProductGridImage from "./ProductImageGrig";
import { useParams } from "react-router-dom";

const ProductPage: React.FC = () => {

  const {productId} = useParams();
  console.log(productId)

  const [data, setData] = useState<ProductModel|null>(null);
  const [isLoading,setIsLoading] = useState(true)


  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      console.log("this is fetch function_______")
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("errors")
    }finally{
      setIsLoading(false)
    }
  },[])

  useEffect(()=>{fetchData();},[fetchData]);


  if(isLoading){
    return(<h1>Loading ...</h1>)
  }


  return (
    <>
      <div className="w-[1100px] m-auto py-20 sm:flex">
        <img src={data?.thumbnail} className="w-1/2 h-80" />
        <div className="w-1/2 h-80 px-8 font-semibold">
          <div className="text-6xl pb-6 text-orange-600">{data?.title}</div>
          <div className="text-2xl pb-3">{data?.description}</div>
          <div>Brand : {data?.brand}</div>
          <div>Category : {data?.category}</div>
          <div>Stock left : {data?.stock}</div>
          <div>
            Rating : {data?.rating}
            <GoStarFill className="text-yellow-400 inline" />
          </div>
          <div>
            Discoung Percentage : {data?.discountPercentage}{" "}
            <AiOutlinePercentage className="inline" />
          </div>
          <div>
            Price : {data?.price} <BsCurrencyDollar className="inline" />
          </div>
          <div className="flex justify-start pt-3">
            <button className="text-sm w-24 bg-orange-600 text-white rounded-sm h-8">
              Buy Now
            </button>
            <button>
              <FaRegHeart className="ml-12 text-2xl hover:text-orange-600" />
            </button>
            <button>
              <RiShoppingCartLine className="ml-12 text-2xl hover:text-orange-600" />
            </button>
            <button>
              <IoMdShare className="ml-12 text-2xl hover:text-orange-600" />
            </button>
          </div>
        </div>
      </div>
      <ProductGridImage list={data?.images}/>
    </>
  );
};

export default ProductPage;
