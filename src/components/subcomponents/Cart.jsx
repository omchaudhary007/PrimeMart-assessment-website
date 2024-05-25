
const Cart = ({subProductsInfo}) => {
  return (
    <div className="w-full h-full relative border-2 border-black shadow-lg rounded-lg bg-gray-100 cursor-pointer hover:border-blue-500 ">
       <img className="w-full h-72 p-10 object-contain mb-4 bg-white" src={subProductsInfo.image}/>
       <div className="product-info px-5 flex flex-col gap-2">
         <p className="font-bold">{subProductsInfo.subProductName}</p>
         <div className="text-sm flex gap-4">
          <p className="font-bold text-red-700">{`\u20B9 ${subProductsInfo.price}`}</p>
          <p className="line-through">{`\u20B9 ${subProductsInfo.oldPrice}`}</p>
        </div>
       </div>
       <button className="w-full mt-2 p-2 rounded-lg bg-black text-white hover:bg-red-500">Order Now</button>
       <p className="p-1 absolute top-0 right-0 text-xs rounded-lg bg-blue-500 text-white">{`${subProductsInfo.offPercentage} Off`}</p>
    </div>
  )
}

export default Cart
