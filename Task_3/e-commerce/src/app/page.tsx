import Image from "next/image";
import HeaderSlide from "@/components/Header/HeaderSlide";
import Products from "@/components/Product/Products";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <Products/>
    </div>
  );
}
