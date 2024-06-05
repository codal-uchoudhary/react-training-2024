"use client";

import HeaderSlide from "./HeaderSlide";
import HeaderSlide2 from "./HeaderSlide2";
import HeaderSlide3 from "./HeaderSlide3";
import HeaderSlide4 from "./HeaderSlide4";
import HeaderSlide5 from "./HeaderSlide5";
import { useEffect, useState } from "react";

const HeaderSlides = [
  <HeaderSlide />,
  <HeaderSlide2 />,
  <HeaderSlide3 />,
  <HeaderSlide4 />,
  <HeaderSlide5 />,
];

const Header = () => {
  const [currentHeaderSlide, setCurrentHeaderSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeaderSlide((prevIndex) => (prevIndex < 4 ? prevIndex + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[430px] bg-slate-200 shadow-md w-full overflow-hidden ">
      {HeaderSlides.map((slide, index) => (
        <div key={index} className={index===currentHeaderSlide?'block':'hidden'}>{slide}</div>
      ))}
    </div>
  );
};

export default Header;
