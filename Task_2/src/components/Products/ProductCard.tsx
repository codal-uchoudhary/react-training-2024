import React from "react";
import ProductModel from "../../Models/ProductModel";


interface ProductCardProps {
    productObj: ProductModel;
}


const ProductCard:React.FC<ProductCardProps>=({productObj})=>{
    return(
        <div className="w-[250px] h-[200px] rounded-md">
            <img src={productObj.thumbnail} className="w-[220px] m-auto h-[100px]"/>
            <div>{productObj.title}</div>
            <div>{productObj.description}</div>
        </div>
    )
}

export default ProductCard;