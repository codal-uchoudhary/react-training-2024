import smartPhone from "@/Assets/Category/phoneCat.webp"
import laptop from '@/Assets/Category/laptopCat.webp'
import skincare from '@/Assets/Category/skincaerCar.webp'
import sunglasses from '@/Assets/Category/sunglassesCat.jpg'
import bags from '@/Assets/Category/womanbadCat.jpg'
import top from '@/Assets/Category/topCat.webp'
import watch from '@/Assets/Category/watchCat.jpeg'
import sport from '@/Assets/Category/sportCaat.jpg'
import funiture from '@/Assets/Category/furnitureImages.jpg'
import grocerry from '@/Assets/Category/groceryImages.webp'
import shoose from '@/Assets/Category/ShooseCat.webp'
import CategoryCard from "./CategoryCard"
import manshirt from "@/Assets/Category/manShirtCat.jpg"

const data = [
    {image:skincare,title:"Skin care",off:30},
    {image:smartPhone,title:"Smart phones",off:40},
    {image:laptop,title:"Laptop",off:20},
    {image:sunglasses,title:"Sunglasses",off:30},
    {image:bags,title:"Bags",off:30},
    {image:top,title:"Fashion",off:45},
    {image:watch,title:"Watches",off:50},
    {image:sport,title:"Sport Accessories",off:60},
    {image:funiture,title:"Home Decoration",off:30},
    {image:grocerry,title:"Grocerry",off:20},
    {image:shoose,title:"Shoose",off:40},
    {image:manshirt,title:"Man Shirt",off:50},
]

const CategoryCardList=()=>{
    return(
        <div className="w-full grid grid-cols-6 mt-6">
            {
                data.map((item)=><CategoryCard data={item}/>)
            }
        </div>
    )
}

export default CategoryCardList