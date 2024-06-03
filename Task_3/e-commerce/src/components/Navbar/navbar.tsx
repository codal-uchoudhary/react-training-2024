import Link from "next/link";
import Image from "next/image";
import logo from "@/Assets/logo.png";
import NavLink from "./nav-link";
import NavIcon from "./Nav-icons";
import { SlHandbag } from "react-icons/sl";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import SearchBar from "./SearchBar";

const NavbarList = [
  { url: "/phone", title: "Phone" },
  { url: "/laptop", title: "Laptop" },
  { url: "/furniture", title: "Furniture" },
  { url: "/clother", title: "Clothes" },
  { url: "/man", title: "Man" },
];

const NavbarIconList = [
  {
    url: "/account",
    title: "Account",
    icon: <MdOutlinePersonOutline className="text-xl" />,
  },
  { url: "/cart", title: "Bag", icon: <SlHandbag className="text-xl" /> },
  { url: "/cart", title: "Wishlist", icon: <CiHeart className="text-xl" /> },
];

export default function Navbar() {
  return (
    <div>
      <nav className="flex px-4 h-[80px] shadow-md text-xs font-bold text-zinc-600 tracking-wider">
        <div className="basis-6/12  flex justify-left items-center bg-slate-200">
          <Link href="/">
            <Image src={logo} alt="logo" width={70} />
          </Link>
          <ul className="list-none w-full flex justify-evenly text-sm tracking-wide font-semibold text-gray-700">
            {NavbarList.map((item) => (
              <NavLink url={item.url}>{item.title}</NavLink>
            ))}
          </ul>
        </div>
        <div className="basis-3/12 py-5 flex justify-center bg-pink-200">
          <SearchBar />
        </div>
          <ul className="list-none flex justify-evenly text-sm tracking-wide font-semibold text-gray-700">
            {NavbarIconList.map((item) => (
              <NavIcon url={item.url} title={item.title}>
                {item.icon}
              </NavIcon>
            ))}
          </ul>
      </nav>
    </div>
  );
}
