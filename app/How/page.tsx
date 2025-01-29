import React from 'react';

const page: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6ece1] pt-[15vh] px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-[#4a4a4a] mb-4">Work With Us</h1>
        <p className="text-xl text-[#c6a48e] mb-12">In just 3 simple steps</p>

        {/* Steps Section */}
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex items-center gap-6">
            <div className="text-5xl font-bold text-[#c6a48e]">1</div>
            <div>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                The order can only be completed and confirmed once payment is made and proof of payment (POP) is received. Payments must be made at least 2 days prior to the delivery date.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-6">
            <div className="text-5xl font-bold text-[#c6a48e]">2</div>
            <div>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                No refunds will be issued for cancellations made 24 hours prior to the delivery date or on the day of delivery.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-6">
            <div className="text-5xl font-bold text-[#c6a48e]">3</div>
            <div className='w-full h-auto'>
              <p className="text-lg text-[#4a4a4a] leading-relaxed h-auto  pb-[4vh]">
                Deliveries are between 10:00 and 17:00 from Monday to Saturday (unless it is a special request).
                <br />
                <span className="italic text-[#c6a48e] ">
                  *Outside the 20km radius, an extra fee will be charged depending on the distance.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
