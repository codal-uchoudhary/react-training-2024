import Link from "next/link";
import React, { ReactNode } from "react";

interface childComponentProps {
  url: string;
  children: string;
}



const NavLink: React.FC<childComponentProps> = ({ url, children }) => {
  return (
    <li className="mx-4 flex items-center hover:border-b-2 border-orange-600">
      <Link href={`/${url}`}>{children}</Link>
    </li>
  );
};

export default NavLink;
