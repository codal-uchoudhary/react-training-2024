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
      <nav className="shadow-md flex">
        <Link href="/">
          <Image src={logo} alt="logo" width={70} />
        </Link>
        <ul className="list-none flex justify-evenly text-sm tracking-wide font-semibold text-gray-700">
          {NavbarList.map((item) => (
            <NavLink url={item.url}>{item.title}</NavLink>
          ))}
        </ul>
        <SearchBar />
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
