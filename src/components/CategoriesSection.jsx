import Categories from "./subcomponents/Categories"
import userData from "../Data/productsData.json"
const CategoriesSection = () => {
  return (
    <section className="section my-2 grid grid-flow-col gap-4"> 
      {userData.Categories.map((category, index) => (
       <Categories key={index} categorydata={category}/>
     ))}
    </section>
  )
}

export default CategoriesSection

