import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4a4a4a] text-white  ">
      <hr className='w-full h-[3px] bg-[#c6a48e] mt-0 border-none mb-10'/>
      <div className="w-full max-w-5xl mx-auto px-6 text-center">
        {/* Logo or Brand Name */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[#c6a48e]">Ivy <i className='relativebg-[#c6a48e] w-[5px] h-[5px]'></i> Projects</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-12 mb-6">
          <a href="/about" className="text-white hover:text-[#c6a48e] transition-colors">About Us</a>
          <a href="/services" className="text-white hover:text-[#c6a48e] transition-colors">Services</a>
          <a href="/contact" className="text-white hover:text-[#c6a48e] transition-colors">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c6a48e] transition-colors">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c6a48e] transition-colors">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#c6a48e] transition-colors">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#b0b0b0] pb-[3vh]">
          &copy; {new Date().getFullYear()} [Your Floral Business Name]. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
