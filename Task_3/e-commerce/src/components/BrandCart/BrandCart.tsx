"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import nike from "@/Assets/nike.svg";
import addids from "@/Assets/adidas.svg";
import armani from "@/Assets/armani.svg";
import champion from "@/Assets/champion.svg";
import channel from "@/Assets/chanel.svg";
import gucci from "@/Assets/gucci.svg";
import lactos from "@/Assets/lacoste.svg";
import puma from "@/Assets/puma.svg";
import vans from "@/Assets/vans.svg";
import { IoMdArrowDropright,IoMdArrowDropleft } from "react-icons/io";

const BrandCart = () => {
    
  const settings = {
    accessibility:true,
    dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    
  };
  
  return (
    <div className="slider-container w-11/12 m-auto mt-10  mb-10">
      <div className="text-center pt-5 pb-20 text-2xl font-semibold">SHOPE FROM TOP <span>BRANDS</span></div>
      <Slider {...settings}>
        <div className="slide flex justify-center ">
          <Image src={nike} alt="Image 1" height={100} width={90} />
        </div>
        <div className="slide flex justify-center ">
          <Image src={addids} alt="Image 1" height={100} width={90} />
        </div>
        <div className="slide flex justify-center ">
          <Image src={armani} alt="Image 1" height={100} width={90} />
        </div>
        <div className="slide flex justify-center ">
          <Image src={champion} alt="Image 1" height={100} width={90} />
        </div>
        <div className="slide flex justify-center ">
          <Image src={channel} alt="Image 1" height={100} width={90} />
        </div>
        <div className="slide flex justify-center ">
          <Image src={gucci} alt="Image 1" height={100} width={90} />
        </div>
        <div className="slide flex justify-center ">
          <Image src={lactos} alt="Image 1" height={100} width={90} />
        </div>
        <div className="slide flex justify-center ">
          <Image src={puma} alt="Image 1" height={100} width={90} />
        </div>
        <div className="slide flex justify-center ">
          <Image src={vans} alt="Image 1" height={100} width={90} />
        </div>
      </Slider>
      
    </div>
  );
};

export default BrandCart;
