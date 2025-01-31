'use client';

import React from 'react';
import Image from 'next/image';
import { useQuery, gql } from '@apollo/client';
import PriceCard from '@/components/PriceCard';

// Define TypeScript interfaces for type safety
interface ImageData {
  url: string;
}

interface Bouquet {
  id: string;
  name: string;
  price: number;
  image: ImageData | null;
}

// GraphQL Query
const GET_BOUQUETS = gql`
  query GetBouquets {
    homes {
      id
      name
      price
      image {
        url
      }
    }
  }
`;

const Price: React.FC = () => {
  // Fetch data using Apollo with correct TypeScript typing
  const { loading, error, data } = useQuery<{ homes: Bouquet[] }>(GET_BOUQUETS);

  if (loading) return <p className="text-center text-gray-500">Loading bouquets...</p>;
  if (error) return <p className="text-center text-red-500">Error loading data. Please try again.</p>;

  // Extract and map data safely
  const bouquets = data?.homes?.map((item) => ({
    name: item.name,
    price: item.price,
    image: item.image?.url || '/default-image.jpg', // Fallback image if null
  })) || [];

  return (
    <div className="w-full h-auto pb-[3vh]">
      {/* Header Image */}
      <div className="relative w-full top-0 pt-0 mt-0 min-h-[20vh] pl-[5vw] pb-[5vh]">
      <Image 
        src="/ivyprice.PNG" 
        alt="Price Banner" 
        width={350} 
        height={100} 
        style={{ width: "auto", height: "auto" }} 
      />
      </div>

      {/* Display Fetched Bouquets */}
      <div className="w-full min-h-[80vh] overflow-y-auto flex flex-col items-center space-y-[5vh]">
        {bouquets.length > 0 ? (
          bouquets.map((item, i) => (
            <PriceCard key={i} name={item.name} price={item.price} image={item.image} />
          ))
        ) : (
          <p className="text-gray-500">No bouquets available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Price;
