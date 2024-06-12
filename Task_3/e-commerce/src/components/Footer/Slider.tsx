"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from '@/Assets/b1.png'
import b2 from '@/Assets/b2.png'
import b4 from '@/Assets/b3.png'
import b3 from '@/Assets/b4.png'
import b5 from '@/Assets/b5.png'
import b6 from '@/Assets/b6.png'
import b7 from '@/Assets/b71.png'
import b8 from '@/Assets/b8.png'
import b9 from '@/Assets/b9.png'
import b10 from '@/Assets/b10.png'
import Image from "next/image";


const FooterSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container w-11/12 m-auto bg-slate-500">
    </div>
  );
};

export default FooterSlider;
