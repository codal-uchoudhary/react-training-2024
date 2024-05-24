import React from "react";

const ProductGridImage:React.FC<{list:string[] | undefined}>=(props)=>{
    return(
        <div>
            <div className="text-base font-bold ml-10 m-auto tracking-wide">Product Images</div>
            <div className="w-[1100px] grid grid-cols-1 sm:grid-cols-4 gap-4 py-[30px] m-auto">
                {props.list?.map((obj)=><img src={obj} className="w-64 h-40"/>)}
            </div>
        </div>
    )
}

export default ProductGridImage