import React from "react";
import ProductModel from "../../Models/ProductModel";
import { GoStarFill } from "react-icons/go";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  productObj: ProductModel;
}

const ProductCard: React.FC<ProductCardProps> = ({ productObj }) => {

  const productId = productObj?.id

  const navigate = useNavigate();

  return (
    <div className=" w-[250px] rounded-md  shadow-sm relative hover:shadow-md" onClick={()=>{navigate(`/product/${productId}`);}}>
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

        {/* <div className="text-base font-semibold">
          <BsCurrencyDollar className="inline" />
          {productObj?.price}
        </div> */}
      </div>
      <div className="w-[60px] h-[25px] bg-orange-600 text-sm text-white rounded-sm flex justify-evenly absolute top-1 right-1 font-bold">
        {productObj?.discountPercentage}
        <AiOutlinePercentage className="inline mt-1" />
      </div>
    </div>
  );
};

export default ProductCard;
