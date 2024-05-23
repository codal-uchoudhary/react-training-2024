import { BsCurrencyDollar } from "react-icons/bs";
import CartContext from "../../Store/ShoppingCart";
import { useContext } from "react";
import ProductModel from "../../Models/ProductModel";
import { MdOutlineLocalOffer } from "react-icons/md";


const BillComponent = (props: { productList: ProductModel[] }) => {
  const cartCtx = useContext(CartContext);

  let Total_amount = 0;
  let discount = 0;

  for (let i of cartCtx?.items ?? []) {
    for (let j of props?.productList) {
      if (i.id === j.id) {
        Total_amount += i.count * j.price;
        break;
      }
    }
  }
  discount = Total_amount / 10;
  const shipping_fee = 2
  const Platform_fee = "FREE";
  const priceHeading1 = `Price Detail (${props.productList.length} Items)`

  return (
    <div className="w-2/5 px-10 border-l text-sm tracking-wide">
      <div className="mb-4 py-4 border">
        <div className="text-center font-semibold mb-4">Delivery opetion</div>
        <div className="flex justify-evenly text-xs font-semibold text-orange-600">
          <button className=" border border-orange-600 px-2 py-1">BASIC DELIVERY</button>
          <button className=" border border-orange-600 px-2 py-1">ADVANCE DELIVERY</button>
        </div>
      </div>
      <div className="flex justify-between my-4">
        <div className="font-semibold">{<MdOutlineLocalOffer className="inline"/>} Apply Coupons</div>
        <button className="border border-orange-600 px-2 py-1 text-xs font-semibold text-orange-600">APPLY</button>
      </div>
      <div className="font-semibold text-zinc-500 py-4">Support our Delivery Team</div>
      <div className="flex justify-evenly text-xs font-bold">
        <button className="py-1 px-2 border border-black bg-zinc-200 rounded-xl">$10</button>
        <button className="py-1 px-2 border border-black bg-zinc-200 rounded-xl">$20</button>
        <button className="py-1 px-2 border border-black bg-zinc-200 rounded-xl">$40</button>
        <button className="py-1 px-2 border border-black bg-zinc-200 rounded-xl">$50</button>
      </div>
      <div className="font-semibold py-4 mt-6">{priceHeading1}</div>
      <div className="flex justify-between text-xs font-semibold py-1"><p>Total MER</p><p><BsCurrencyDollar className="inline"/>{Total_amount}</p></div>
      <div className="flex justify-between text-xs font-semibold py-1 text-green-600"><p>Discount on MRP</p><p><BsCurrencyDollar  className="inline"/>{discount}</p></div>
      <div className="flex justify-between text-xs font-semibold py-1 text-green-600"><p>Platform Fee</p><p>{Platform_fee}</p></div>
      <div className="flex justify-between text-xs font-semibold py-1"><p>Shipping Price</p><p><BsCurrencyDollar  className="inline"/>{shipping_fee}</p></div>
      <div className="flex justify-between text-base font-bold py-4  border-t"><p>Total Amount</p><p><BsCurrencyDollar  className="inline"/>{Total_amount}</p></div>
      <button className="h-10 rounded-sm bg-orange-600 text-white text-sm w-full mt-4 font-bold">
        PLACE ORDER
      </button>
    </div>
  );
};

export default BillComponent;
