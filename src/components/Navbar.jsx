import TypeaheadSearch from "./TypeheadSearch"

const Navbar = () => {
  return (
    <section className="w-full px-10 py-8 flex items-center justify-between gap-10">
      <h1 className="text-2xl blue-color font-bold">PrimeMart</h1>

      {/* Search-section */}
      <div className="search-section flex-1">
        <TypeaheadSearch/>
      </div>

      {/* Nav-links section */}
      <nav className="nav-links font-medium flex items-center gap-10 whitespace-nowrap">
        <div className="transition-300 flex items-center gap-2 cursor-pointer hover:text-pink-500">
          <img className="w-5 h-5" src="assets/user.png" alt="search-icon"/>
          <span>Login</span>
        </div>
        <div className="transition-300 flex items-center gap-2 cursor-pointer hover:text-pink-500">
          <img className="w-5 h-5" src="assets/cart.png" alt="search-icon"/>
          <span>Cart</span>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
