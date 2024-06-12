import React from "react";
import ProductModel from "@/Models/ProductModel";
import { GoStarFill } from "react-icons/go";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
import Link from "next/link";

interface ProductCardProps {
  productObj: ProductModel;
}

const ProductCard: React.FC<ProductCardProps> = ({ productObj }) => {
  const productId = productObj?.id;

  return (
    <div className=" w-[250px] rounded-md  shadow-sm relative hover:shadow-md">
      <Link href={`/products/${productId}`}>
        <img
          src={productObj?.thumbnail}
          className="w-full m-auto h-[150px] rounded-t-md"
        />
        <div className="px-4 py-2 tracking-wide">
          <div className="text-sm font-semibold text-zinc-500 pb-2">
            {productObj?.title}
          </div>
          <div className="text-xs font-semibold">
            {productObj?.description.substring(0, 47) + " ..."}
          </div>
          <div className="text-sm font-semibold text-zinc-500 pt-2 flex justify-between">
            <div>
              {productObj?.rating}
              <GoStarFill className="text-yellow-400 inline" />
            </div>
            <div>{productObj?.stock} left</div>
          </div>
        </div>
        <div className="w-[60px] h-[25px] bg-orange-600 text-sm text-white rounded-sm flex justify-evenly absolute top-1 right-1 font-bold">
          {productObj?.discountPercentage}
          <AiOutlinePercentage className="inline mt-1" />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
