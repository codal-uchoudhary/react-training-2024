import React from "react";

const ProductGridImage:React.FC<{list:string[] | undefined}>=(props)=>{
    return(
        <div>
            <div className="text-2xl font-semibold w-[1100px] m-auto">Product Images</div>
            <div className="w-[1100px] grid grid-cols-1 sm:grid-cols-4 gap-4 py-[30px] m-auto">
                {props.list?.map((obj)=><img src={obj} className="w-64 h-40"/>)}
            </div>
        </div>
    )
}

export default ProductGridImage