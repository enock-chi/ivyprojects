import React from 'react';
import Image from 'next/image';

type GalleryCardProps = {
  image: string;
};

const GalleryCard: React.FC<GalleryCardProps> = ({ image }) => {
  return (
    <div className="w-[80vw] mx-auto h-[80vh] d-flex justify-content-center align-items-center">
      <Image
        src={image.startsWith('http') ? image : `/uploads/${image}`} // Ensure valid path
        alt="Gallery Image"
        width={800} // Adjust width
        height={600} // Adjust height
        className="rounded shadow-lg object-cover"
        layout="intrinsic" // Ensures proper sizing
        priority // Optimizes loading
      />
    </div>
  );
};

export default GalleryCard;
