import Image from "next/image"
const CategoryCard=(props:{data:{image:HTMLImageElement,title:string,off:number}})=>{

    const offer = `MIN. ${props.data.off}% OFF`

    return(
        <div className="w-48 h-56 m-4 flex items-center justify-start shadow-md relative hover:shadow-xl">
            <Image src={props.data.image}  height={224} alt="boom"/>
            <div className="absolute bottom-2 left-1/5 w-full bg-gray-300">
                <p className="text-center text-sm tracking-wide">{props.data.title}</p>
                <p className="text-center text-base tracking-tighter">{offer}</p>
            </div>
        </div>
    )
}

export default CategoryCard