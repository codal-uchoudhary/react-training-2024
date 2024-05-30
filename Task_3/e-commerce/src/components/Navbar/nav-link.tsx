import Link from "next/link";
import React, { ReactNode } from "react";

interface childComponentProps {
  url: string;
  children: string;
}

const NavLink: React.FC<childComponentProps> = ({ url, children }) => {
  return (
    <li className="bg-red-200">
      <Link href={url}>{children}</Link>
    </li>
  );
};

export default NavLink;
