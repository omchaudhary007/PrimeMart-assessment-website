import Product from "./Product"
const Categories = ({categorydata}) => {
  return (
    <div className="relative whitespace-nowrap group">
      <div className="px-4 py-1 w-fit mb-2 font-medium bg-blue-100 rounded-full flex items-center gap-1 cursor-pointer group-hover:bg-orange-400">
        <span>{categorydata.CategoryName}</span>
        <img className='w-4 h-4 transition-300 group-hover:rotate-180' src="assets/arrow.png" alt="arrow-button"/>
      </div>
      <div className="min-w-52 w-fit absolute -left-1/2 z-10 shadow-lg bg-white rounded-lg cursor-pointer">
        {categorydata.Products.map((ProductData, index) => (
            <Product key={index} ProductInfo={ProductData}/>
         ))}   
      </div>
    </div>
  )
}

export default Categories
