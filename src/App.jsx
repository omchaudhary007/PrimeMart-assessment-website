import { useState } from "react";
import Navbar from './components/Navbar'
import CategoriesSection from "./components/CategoriesSection";
import Bestdeal from "./components/Bestdeal";
import Herosection from "./components/Herosection";
import Footer from "./components/Footer";
import offerData from "./Data/OfferData.json"

const App = () => {
  return (
    <div>
      <Navbar/>
      <p className="line h-[1px] w-full bg-gray-300"></p>
      <CategoriesSection/>
      <Herosection/>
      {offerData.products.map((ProductsData, index) => (
         <Bestdeal key={index} ProductInfo={ProductsData}/>
      ))}
      <Footer/>
    </div>
  )
}

export default App
