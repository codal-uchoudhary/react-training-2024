import React from "react";
import ProductList from "../components/Products/ProductList";
import HeaderSlide from "../components/Header/HeaderSlide1";

const Home:React.FC=()=>{
    return(
        <>
        <HeaderSlide/>
        <ProductList/>
        </>
    )
}

export default Home