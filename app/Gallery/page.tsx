'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Carousel } from 'react-bootstrap';

// GraphQL query to fetch images
const GET_IMAGES = gql`
  query GetGalleryImages {
    galleries {
      id
      images {
        url
      }
    }
  }
`;

const Page: React.FC = () => {
  // Fetch images using Apollo
  const { loading, error, data } = useQuery(GET_IMAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading images</p>;

  // Assuming galleries is an array, and we want images from the first gallery
  const images: string[] = data?.galleries?.[0]?.images?.map((img: { url: string }) => img.url) || [];
 
  return (
    <div className="pt-[14vh]">
      <h2 className="text-center font-bold text-2xl text-secondary">Gallery</h2>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
            {/* Optionally, add captions or other content here */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Page;
