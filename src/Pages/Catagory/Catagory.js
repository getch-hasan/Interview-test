
import React, { useEffect, useState } from 'react';
import Allhotel from '../Hooks/Allhotel';

const Category = () => {
    // const [products,setProducts]=Allhotel()
    const [activeButton, setActiveButton] = useState(null);

    // console.log(products)
    const handleCategory = (category) => {
        setActiveButton(category);
        console.log(category)
    };
   /*  const handleLakeFront = (category) => {
        setActiveButton(category);

    };
    const handleCabins = (category) => {
        setActiveButton(category);
    };
    const handleAmazingView = (category) => {
        setActiveButton(category);
    }; */

    return (
        <div className="grid grid-cols-4 bg-white justify-center py-6 ps-24  w-full top-28">
            <button
                className={`${activeButton === 'BeachFront' ? 'border-b-2 border-black w-1/3' : 'hover:border-b-2 w-1/3'
                    }`}
                onClick={() => handleCategory('BeachFront')}
            >
                BeachFront
            </button>
            <button
                className={`${activeButton === 'LakeFront' ? 'border-b-2 border-black w-1/3' : 'hover:border-b-2 w-1/3'
                    }`}
                onClick={() => handleCategory('LakeFront')}
            >
                LakeFront
            </button>
            <button
                className={`${activeButton === 'Cabins' ? 'border-b-2 border-black w-1/3 ' : 'hover:border-b-2 w-1/3'
                    }`}
                onClick={() => handleCategory('Cabins')}
            >
                Cabins
            </button>
            <button
                className={`${activeButton === 'amazing view' ? 'border-b-2 border-black w-1/3' : 'hover:border-b-2 w-1/3'
                    }`}
                onClick={() => handleCategory('amazing view')}
            >
                amazing view
            </button>

        </div>
    );
};

export default Category;
