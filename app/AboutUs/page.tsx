import Image from 'next/image';
import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-16">
      {/* Full-width hero image */}
      <div className="relative w-full h-[30vh] bg-cover bg-center" style={{ backgroundImage: 'url("/aboutus1.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl font-bold pt-[5vh]">About Us</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-5xl px-6 py-12 bg-[#f6ece1]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#c6a48e] mb-6">Our Story</h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed mb-10">
            At <span className='italic'>Ivy Projects</span>, we craft elegant and contemporary floral designs, blending nature’s beauty with modern style. Our journey began with a shared love of flowers and a passion for creating timeless moments through design. We believe in the power of flowers to transform spaces and express emotions, whether for a wedding, an intimate event, or a simple gift.
          </p>
        </div>

        <div className="flex justify-center gap-12 mb-10">
          <div className="w-2/3">
            <Image src="/sam1.jpg" alt="Sam img" className="w-[66vw] h-[60vw] object-cover shadow-md mb-4 rounded-full" width={200} height={100} />
            <h3 className="text-xl font-semibold text-[#c6a48e] text-center">Samantha Chirume</h3>
            <p className="text-center text-[#4a4a4a]">Founder & Lead Florist</p>
          </div>
          
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-[#c6a48e] mb-6">Our Vision</h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed mb-6">
            Our vision is to elevate floral artistry by creating designs that feel both luxurious and accessible. We focus on sustainability, craftsmanship, and attention to detail, ensuring every arrangement is a work of art that tells a story. Our goal is to craft experiences that last long after the flowers have faded.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#c6a48e] mb-6">Our Commitment to Quality</h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed mb-10">
            At <span className='italic'>Ivy Projects</span>, quality is at the core of everything we do. From hand-selecting the freshest blooms to meticulously designing every arrangement, we strive for excellence. Our team of expert florists is dedicated to delivering designs that reflect your unique style and vision, whether for an elegant wedding or a simple, joyful bouquet.
          </p>
        </div>

        {/* Contact Call-to-Action */}
        <div className="text-center">
          <a href="/contact" className="inline-block px-8 py-3 bg-[#c6a48e] text-white font-bold rounded-lg hover:bg-[#b08e7b] transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
