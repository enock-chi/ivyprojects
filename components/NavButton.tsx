import React from 'react';

type NavButtonProps = {
    handleToggle: () => void;
    isOpen: boolean;
};

const NavButton: React.FC<NavButtonProps> = ({ handleToggle, isOpen }) => {
    return (
        <div className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer" onClick={handleToggle}>
            <span
                className={`block w-full h-0.5 bg-[#c6a48e] transition-transform duration-300 ease-in-out ${
                    isOpen ? 'transform rotate-45 translate-y-1.5' : ''
                }`}
            />
            <span
                className={`block w-full h-0.5 bg-[#c6a48e] my-1 transition-opacity duration-300 ease-in-out ${
                    isOpen ? 'opacity-0 bg-[#c6a48e]' : 'opacity-100 bg-[#c6a48e]'
                }`}
            />
            <span
                className={`block w-full h-0.5 bg-[#c6a48e] transition-transform duration-300 ease-in-out ${
                    isOpen ? 'transform -rotate-45 -translate-y-1.5 bg-[#c6a48e]' : 'bg-[#c6a48e]'
                }`}
            />
        </div>
    );
};

export default NavButton;
