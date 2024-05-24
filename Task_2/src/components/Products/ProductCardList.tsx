import ProductCard from "./ProductCard";
import ProductModel from "../../Models/ProductModel";

const ProductCartList=(props:{list:ProductModel[]})=>{
    return(
        <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-x-24 gap-y-16 px-[50px] py-[10px]">
            {props.list.map(item=><ProductCard  productObj={item}/>)}
        </div>
    )
}


export default ProductCartList;