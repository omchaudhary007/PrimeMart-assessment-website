import React from 'react';

function Footer() {
  return (
    <footer className="w-full p-10 bg-gray-900 text-white whitespace-nowrap">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a className='hover:text-blue-500' href="#">Home</a></li>
            <li><a className='hover:text-blue-500' href="#">Shop</a></li>
            <li><a className='hover:text-blue-500' href="#">About Us</a></li>
            <li><a className='hover:text-blue-500' href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul>
            <li><a className='hover:text-blue-500' href="#">FAQs</a></li>
            <li><a className='hover:text-blue-500' href="#">Shipping</a></li>
            <li><a className='hover:text-blue-500' href="#">Returns</a></li>
            <li><a className='hover:text-blue-500' href="#">Track Order</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <ul>
            <li>Email: Omchaudhary0730@gmail.com</li>
            <li>Phone: +1234567890</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Get Our Latest Deals!</h3>
          <form className="flex">
            <input type="email" placeholder="Your email" className="py-2 px-3 mr-2 bg-gray-800 text-white rounded-l focus:outline-none" />
            <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-r">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Primemart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
