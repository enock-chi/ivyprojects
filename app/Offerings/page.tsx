import React from 'react';



const Page: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#f6ece1] text-[#3b3b3b] pt-[10vh]">
            <div className="w-[90%] max-w-4xl mx-auto py-12">
                <h1 className="text-4xl font-bold text-center mb-8">Our Offerings</h1>
                
                {/* Offerings Section */}
                <div className="space-y-12">
                    {/* Add-Ons */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Add-Ons</h2>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <ul className="space-y-3">
                                <li className="flex justify-between">
                                    <span>Baby Breath</span>
                                    <span>R180 a bundle</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Yellow Roses</span>
                                    <span>R18 a stem</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Orange Roses</span>
                                    <span>R18 a stem</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Pink Roses</span>
                                    <span>R22 a stem</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Blue Roses</span>
                                    <span>R25 a stem</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sunflowers x5</span>
                                    <span>R200</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Tulips x10</span>
                                    <span>R300</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Extended Prices */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Extended Prices</h2>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <ul className="space-y-3">
                                <li className="flex justify-between">
                                    <span>100 Roses</span>
                                    <span>R1500</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>130 Roses</span>
                                    <span>R1900</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>150 Roses</span>
                                    <span>R2300</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>180 Roses</span>
                                    <span>R2600</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>200 Roses</span>
                                    <span>R3000</span>
                                </li>
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

export default Page;
