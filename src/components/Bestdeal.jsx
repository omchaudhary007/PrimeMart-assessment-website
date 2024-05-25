import './Bestdeal.css'
import Cart from './subcomponents/Cart'
const Bestdeal = ({ProductInfo}) => {
  return (
    <section className="section my-10 ">
       <div className='mb-4 font-medium flex items-center justify-between'>
          <p className="offer-heading relative text-xl  text-gray-700">Grab the best deal on <span className="text-blue-700">{ProductInfo.productName}</span></p>
          <div className='tranisiton-300 flex items-center gap-2 cursor-pointer hover:text-blue-500'>
            <span className='text-sm'>View All</span>
            <img className="w-3 h-3 rotate-[270deg]" src="assets/arrow.png" alt="arrow"/>
          </div>
       </div>
       <p className='w-full h-[0.2px] bg-gray-300'></p>
       <div className='my-10 p-2 grid grid-flow-col items-center gap-4 overflow-auto hide-scrollbar'>
        {ProductInfo.subProducts.map((subProductsdata, index) => (
          <Cart key={index} subProductsInfo={subProductsdata}/>
        ))}   
       </div>
    </section>
  )
}

export default Bestdeal
