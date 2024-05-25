const Herosection = () => {
  return (
    <main className="w-full min-h-screen px-10 bg-pink-200 flex items-center">
      <div className="hero-left w-1/2 px-20">
        <h3 className="font-bold text-3xl mb-10">Discover Your Favorites</h3>
        <p>
          Explore our diverse collection of products, from electronics and home
          essentials to fashion and beyond. Find everything you need, all in one
          place.
        </p>
        <button className="px-6 py-1 mt-4 rounded-full text-white bg-red-500 transition-300 hover:bg-black">Explore Now</button>
      </div>
      <div className="hero-right w-1/2 flex justify-end">
          <img className="w-2/3 h-2/3" src="assets/hero-img.png" alt="hero-image"/>
      </div>
    </main>
  );
};

export default Herosection;
