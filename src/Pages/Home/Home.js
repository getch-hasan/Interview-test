import React, { useState } from 'react';
import Allhotel from '../Hooks/Allhotel';
import Product from './Product';
import ToggleSwitch from '../Hooks/Toggol';

const Home = () => {
    const [products, setProducts,filteredProduct,setFilteredProduct] = Allhotel()
    console.log(products)
    const [activeButton, setActiveButton] = useState(null);

    // console.log(products)
    const handleCategory = (category) => {
        setActiveButton(category);
        const filtered = products.filter((product) =>
            product.category.toLowerCase().includes(category.toLowerCase()) ||
            product.name.toLowerCase().includes(category.toLowerCase()))
            setFilteredProduct(filtered)
    };
    return (
        <div className='sticky w-full'>
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
                    className={`${activeButton === 'Mountain ' ? 'border-b-2 border-black w-1/3' : 'hover:border-b-2 w-1/3'
                        }`}
                    onClick={() => handleCategory('Mountain ')}
                >
                    Mountain 
                </button>

            </div>
            <div>
                <ToggleSwitch></ToggleSwitch>
            </div>
            <div className='grid grid-cols-4 mt-20 gap-x-10 gap-y-10'>
                {
                    filteredProduct.map(product => <Product
                        product={product}
                        key={product._id}
                    ></Product>

                    )
                }

            </div>
        </div>
    );
};

export default Home;