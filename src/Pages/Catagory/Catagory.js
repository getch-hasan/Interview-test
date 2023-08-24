import React, { useState } from 'react';

const Category = () => {
    const [activeButton, setActiveButton] = useState(null);
  

    const handleBeachFront = (category) => {
        setActiveButton(category);
        
        
    };
    const handleLakeFront = (category) => {
        setActiveButton(category);
       
    };
    const handleCabins = (category) => {
        setActiveButton(category);
    };
    const handleAmazingView = (category) => {
        setActiveButton(category);
    };

    return (
        <div className="grid grid-cols-4 justify-center ms-24 fixed w-full top-28">
            <button
                className={`${activeButton === 'BeachFront' ? 'border-b-2 border-black w-1/3' : 'hover:border-b-2 w-1/3'
                    }`}
                onClick={() => handleBeachFront('BeachFront')}
            >
                BeachFront
            </button>
            <button
                className={`${activeButton === 'LakeFront' ? 'border-b-2 border-black w-1/3' : 'hover:border-b-2 w-1/3'
                    }`}
                onClick={() => handleLakeFront('LakeFront')}
            >
                LakeFront
            </button>
            <button
                className={`${activeButton === 'Cabins' ? 'border-b-2 border-black w-1/3 ' : 'hover:border-b-2 w-1/3'
                    }`}
                onClick={() => handleCabins('Cabins')}
            >
                Cabins
            </button>
            <button
                className={`${activeButton === 'amazing view' ? 'border-b-2 border-black w-1/3' : 'hover:border-b-2 w-1/3'
                    }`}
                onClick={() => handleAmazingView('amazing view')}
            >
                amazing view
            </button>

        </div>
    );
};

export default Category;
