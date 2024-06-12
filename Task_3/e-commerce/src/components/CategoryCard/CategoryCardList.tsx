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
    {image:skincare,title:"Skin care",off:30,category:"skin-care"},
    {image:smartPhone,title:"Smart phones",off:40,category:"smartphones"},
    {image:laptop,title:"Laptop",off:20,category:"laptops"},
    {image:sunglasses,title:"Sunglasses",off:30,category:"sunglasses"},
    {image:bags,title:"Bags",off:30,category:"womens-bags"},
    {image:top,title:"Fashion",off:45,category:"tops"},
    {image:watch,title:"Watches",off:50,category:"womens-watches"},
    {image:sport,title:"Sport Accessories",off:60,category:"sports-accessories"},
    {image:funiture,title:"Home Decoration",off:30,category:"furniture"},
    {image:grocerry,title:"Grocerry",off:20,category:"groceries"},
    {image:shoose,title:"Shoose",off:40,category:"womens-shoes"},
    {image:manshirt,title:"Man Shirt",off:50,category:"mens-shirts"},
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