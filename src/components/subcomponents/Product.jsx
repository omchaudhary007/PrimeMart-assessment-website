import React, { useEffect, useState,useRef } from 'react';
import SubProducts from "./SubProducts"
const Product = ({ProductInfo}) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="text-sm" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="Products hidden rounded-lg group-hover:flex items-center justify-between hover:bg-gray-200 group">
           <p className="text-fuchsia-700 p-2 font-medium">{ProductInfo.ProductName}</p>
           <img className={`arrow w-4 h-4 m-2 ${isHovering?'rotate-180':''}`} src="assets/arrow.png" alt="arrow"/>
        </div>
        <div className={`Subproducts w-full ${isHovering? 'inline-block':'hidden'}`} >
           {ProductInfo.SubProducts.map((subproduct, index) => (
               <SubProducts key={index} subproductInfo={subproduct}/>
            ))}   
        </div>
    </div>
  )
}

export default Product
