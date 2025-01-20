import React from 'react';
import Image from 'next/image';

type PriceCardProps = {
    name: string,
    price: number,
    image: string,
};

const PriceCard: React.FC<PriceCardProps> = ({name,price, image}) => {
    return (
        <div className='w-[65vw] h-[63vh] shadow-lg border-2 border-[#c6a48e] space-y-[2vh] text-[#c6a48e] rounded-lg text-center py-[3vh] px-[4vw]'>
            <p className=''>{name}</p>
            <p className=''>R{price}</p>
            <div className='w-full h-auto flex items-center justify-center'>
                <Image src={`/${image}`} alt="Bouquet" width={200} height={100} className='rounded-md' />
            </div>
        </div>
    );
};

export default PriceCard;