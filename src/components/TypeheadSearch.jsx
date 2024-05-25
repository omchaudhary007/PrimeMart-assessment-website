import React, { useState } from 'react';
import productData from '../Data/productsData.json';

const TypeaheadSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim() !== '') {
      const filteredResults = productData.Categories.flatMap(category =>
        category.Products.flatMap(product =>
          product.SubProducts.filter(subProduct =>
            subProduct.toLowerCase().includes(e.target.value.toLowerCase())
          ).map(subProduct => ({ category: category.CategoryName, product: product.ProductName, subProduct }))
        )
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  return (
      <div className='p-2 relative rounded-lg bg-blue-50'>
        <div className='flex items-center gap-4'>
            <img className="w-4 h-4 cursor-pointer" src="assets/search.png" alt="search-icon"/>
            <input value={searchTerm} onChange={handleChange} className="w-full bg-blue-50 focus:outline-none" type="search" placeholder="Search for Products, Brands and More"/>
        </div>
        <div className="result-box hide-scrollbar w-full max-h-[50vh] absolute left-0 z-20 bg-white shadow-xl overflow-auto">
          {searchResults.map((result, index) => (
            <div key={index}>
            <p className='p-2 cursor-pointer hover:bg-gray-100'>{result.subProduct}</p>
          </div>
          ))}
        </div>
      </div>
  );
};

export default TypeaheadSearch;
