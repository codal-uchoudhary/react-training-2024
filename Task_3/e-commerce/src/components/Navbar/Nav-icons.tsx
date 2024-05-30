import Link from "next/link";
import React, { ReactNode } from "react";

interface childComponentProps {
  url: string;
  children: ReactNode;
  title:string
}

const NavIcon: React.FC<childComponentProps> = ({ url, children ,title}) => {
  return (
    <li>
      <Link href={url}>
        <div className="flex flex-col items-center">
            {children}
            <div>{title}</div>
        </div>
      </Link>
    </li>
  );
};

export default NavIcon;
