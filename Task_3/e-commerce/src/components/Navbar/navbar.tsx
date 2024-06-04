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
    <nav className="flex shadow-md text-sm font-semibold tracking-wide text-zinc-700">
      <ul className="flex basis-2/4 justify-start ">
        <li className="mx-6 flex items-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={70} priority/>
          </Link>
        </li>
        {NavbarList.map((item) => (
          <NavLink url={item.url}>{item.title}</NavLink>
        ))}
      </ul>

      <div className="basis-1/4 py-5 flex justify-center">
        <SearchBar/>
      </div>

      <ul className="flex basis-1/4 justify-end mr-2 items-center">
        {NavbarIconList.map((item) => (
          <NavIcon url={item.url} title={item.title}>
            {item.icon}
          </NavIcon>
        ))}
      </ul>
    </nav>
  );
}
