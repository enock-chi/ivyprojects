import React from 'react';
import Image from 'next/image';

type GalleryCardProps = {
  image: string;
};

const GalleryCard: React.FC<GalleryCardProps> = ({ image }) => {
  return (
    <div className="w-[80vw] mx-auto h-[80vh] d-flex justify-content-center align-items-center">
      <Image
        src={image}
        alt="Gallery Image"
        width={300}
        height={100}
        className="rounded shadow-lg"
      />
    </div>
  );
};

export default GalleryCard;
