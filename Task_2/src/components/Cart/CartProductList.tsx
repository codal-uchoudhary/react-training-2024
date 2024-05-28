import CartProductItem from "./CartProductItem"
import ProductModel from "../../Models/ProductModel"

const CartProductList=(props:{ListOfItem:ProductModel[]})=>{
    return(
        props.ListOfItem.map(item=><CartProductItem ProductObj={item}/>)
    )
}

export default CartProductList;