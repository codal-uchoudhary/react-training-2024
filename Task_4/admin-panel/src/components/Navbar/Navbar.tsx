import { IoSearchOutline } from "react-icons/io5";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between px-10 py-4 tracking-wider items-baseline">
      <div className="text-4xl ">Admin Panel</div>
      <div className="flex w-1/4 justify-evenly">
        <div className="min-w-48 bg-zinc-800 rounded-md flex justify-center border border-zinc-600">
          <IoSearchOutline className="mt-3 mr-2" />
          <input
            placeholder="Search"
            className="bg-transparent h-10 w-32 focus:outline-none placeholder:pl-2 "
          />
        </div>
        <button className="min-w-40 h-10 shadow-inner shadow-zinc-600 rounded-md border border-zinc-600">
          Reports
        </button>
        <button className="min-w-40 shadow-inner shadow-zinc-600 rounded-md h-10 border border-zinc-600">
          Add Member
        </button>
      </div>
      <div className="flex w-60 justify-between">
        <div className="flex text-3xl justify-between border border-zinc-600 rounded-md">
          <MdDarkMode className="bg-zinc-500 w-12" />
          <MdOutlineLightMode className="w-12" />
        </div>
        <button>Admin</button>
      </div>
    </div>
  );
};

export default Navbar;
