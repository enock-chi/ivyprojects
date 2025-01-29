import React from 'react';
import Image from 'next/image';
import PriceCard from '@/components/PriceCard';

type Bouquet = {
    name: string;
    price: number;
    image: string;
  };

const Price: React.FC = () => {
    const bouquets: Bouquet[] = [
        {
          name: "30 Red/White Roses",
          price: 650,
          image: "IMG_2078.JPG", // Replace with actual image path
        },
        {
          name: "50 Red/White Roses",
          price: 850,
          image: "IMG_1069.JPG", // Replace with actual image path
        },
        {
          name: "80 Red/White Roses",
          price: 1150,
          image: "IMG_0598.JPG", // Replace with actual image path
        },
      ];
      
    return (
        <div className='w-full h-auto pb-[3vh]'>
            <div className='relative w-full top-0 pt-0 mt-0 min-h-[20vh] pl-[5vw] pb-[5vh]'>
                <Image src={'/ivyprice.PNG'} alt='' width={350} height={100} />
            </div>
            <div className='w-full min-h-[80vh] overflow-y-auto flex flex-col items-center space-y-[5vh]'>
                {bouquets.map((item, i) => (
                    <PriceCard key={i} name={bouquets[i].name} price={bouquets[i].price} image={bouquets[i].image} />
                ))}
            </div>
        </div>
        

    );
};

export default Price;