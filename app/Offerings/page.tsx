'use client';

import React from 'react';
import { useQuery, gql } from '@apollo/client';

// GraphQL Query to Fetch Offerings
const GET_OFFERINGS = gql`
  query GetOfferings {
    offerings {
      id
      standard {
        name
        price
      }
      addon {
        name
        price
      }
      extended {
        name
        price
      }
    }
  }
`;

const OfferingsPage: React.FC = () => {
  // Fetch data using Apollo Client
  const { loading, error, data } = useQuery(GET_OFFERINGS);

  if (loading) return <p className="text-center text-gray-500">Loading offerings...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching data.</p>;

  // Extract offerings, ensuring order: Standard → Add-Ons → Extended
  const offerings = data?.offerings?.[0] || {};
  const { standard = [], addon = [], extended = [] } = offerings;

  return (
    <div className="min-h-screen bg-[#f6ece1] text-[#3b3b3b] pt-[10vh]">
      <div className="w-[90%] max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Offerings</h1>

        {/* Offerings Section */}
        <div className="space-y-12">
          
          {/* Standard Offerings (Displayed First) */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Standard Offerings</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <ul className="space-y-3">
                {standard.length > 0 ? (
                  standard.map((item: { name: string; price: string }, index: number) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>R{item.price}</span>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No standard offerings available.</p>
                )}
              </ul>
            </div>
          </section>

          {/* Add-Ons Offerings (Displayed Second) */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Add-Ons</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <ul className="space-y-3">
                {addon.length > 0 ? (
                  addon.map((item: { name: string; price: string }, index: number) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>R{item.price}</span>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No add-ons available.</p>
                )}
              </ul>
            </div>
          </section>

          {/* Extended Prices Offerings (Displayed Last) */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Extended Prices</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <ul className="space-y-3">
                {extended.length > 0 ? (
                  extended.map((item: { name: string; price: string }, index: number) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>R{item.price}</span>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No extended prices available.</p>
                )}
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                For mixed flower arrangements, please send a picture or let us know which arrangement you want, and we will quote you on that.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default OfferingsPage;
