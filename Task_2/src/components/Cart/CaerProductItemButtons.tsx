import { MdDeleteForever } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartProductItemButtons = () => {
  let count = 0;

  return (
    <div className=" w-[100px] flex flex-col justify-evenly">
      <div className="flex justify-evenly text-sm">
        <button>
          <FaPlus className="text-orange-600"/>
        </button>
        {count}
        <button>
          <FaMinus className="text-orange-600"/>
        </button>
      </div>
      <div className="flex justify-evenly mt-2 text-zinc-400 text-1xl">
        <button>
          <MdDeleteForever className="inline" />
        </button>
        <button>
          <MdModeEdit />
        </button>
      </div>
    </div>
  );
};

export default CartProductItemButtons;
