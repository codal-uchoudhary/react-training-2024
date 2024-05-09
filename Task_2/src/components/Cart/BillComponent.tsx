import { BsCurrencyDollar } from "react-icons/bs";



const BillComponent = () => {
  const Total_amount = 10002;
  const discount = 2000;
  const final_amount = Total_amount - discount;

  return (
    <div className="w-[350px] h-[350px] right-16 px-8 fixed ">
      <div className="h-40">
        <div className="flex justify-center items-center font-semibold bg-zinc-400 text-white h-10 rounded-sm">Add Coupen</div>
      </div>
      <div className="h-40">
        <div className="font-semibold mb-6">Your Bill</div>
        <div className="flex justify-between text-zinc-400">
          <div>Total amount</div>
          <div><BsCurrencyDollar className="inline"/>{Total_amount}</div>
        </div>
        <div className="flex justify-between text-zinc-400">
          <div>Discount amount</div>
          <div><BsCurrencyDollar className="inline"/>{discount}</div>
        </div>
        <div className="flex justify-between font-semibold mt-4">
          <div>Total</div>
          <div><BsCurrencyDollar className="inline"/>{final_amount}</div>
        </div>
      </div>
      <button className="h-10 rounded-md bg-orange-600 text-white text-sm w-full mt-4">
        Checkout
      </button>
    </div>
  );
};

export default BillComponent;
