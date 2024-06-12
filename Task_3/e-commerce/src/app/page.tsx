import Image from "next/image";
import HeaderSlide from "@/components/Header/HeaderSlide";
import Products from "@/components/Product/Products";
import Header from "@/components/Header/Header";
import CategoryCardList from "@/components/CategoryCard/CategoryCardList";
import BrandCart from "@/components/BrandCart/BrandCart";
export default function Home() {
  return (
    <div>
      <Header/>
      <CategoryCardList/>
      <BrandCart/>
    </div>
  );
}
