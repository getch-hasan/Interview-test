import React, { useState } from 'react';
import Allhotel from '../Hooks/Allhotel';
import Product from './Product';
import ToggleSwitch from '../Hooks/ToggleSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import FilterModal from './FilterModal';
import SearchLocations from '../Hooks/SearchLocations';


const Home = () => {
    const [products, setProducts, filteredProduct, setFilteredProduct] = Allhotel()
    const [showModal, setShowModal] = useState(false)
    const [activeButton, setActiveButton] = useState(null);
    const [isOn, setIsOn, toggleSwitch] = ToggleSwitch(false)

    let filtered


    const handleModal = () => {
        setShowModal(true)
        console.log(showModal)
    }
    const handleCategory = (category) => {
        setActiveButton(category);
        filtered = products.filter((product) =>
            product.category.toLowerCase().includes(category.toLowerCase()) ||
            product.name.toLowerCase().includes(category.toLowerCase()))
        setFilteredProduct(filtered)

    };
    return (
        <div className='sticky w-full'>
            <div className="grid grid-cols-5 bg-white justify-center py-6 ps-24  w-full top-28">
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
                <button
                    onClick={() => handleModal(true)}
                    className='btn border rounded-lg font-medium w-1/2 py-3'>  <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon> filters</button>

            </div>
            <div>
                <div className='border rounded-xl flex justify-between px-10 py-4 mx-auto w-1/2'>
                    <h1 className='tex-xl font-semibold px-4'>
                        Display total price
                        <span className='font-normal border-s-2 px-5 ms-8'>
                            Includes all fees, before taxes
                        </span>
                    </h1>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input
                            type="checkbox"
                            name="toggle"
                            id="toggle"
                            className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ${isOn ? 'ms-4 ' : ''} `}
                            checked={isOn}
                            onChange={toggleSwitch}
                        />
                        <label
                            htmlFor="toggle"
                            className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${isOn ? 'bg-green-500 ' : ''
                                }`}
                        ></label>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 mt-20 gap-x-10 gap-y-10'>
                {
                    filteredProduct.map(product => <Product
                        product={product}
                        key={product._id}
                        isOn={isOn}
                    ></Product>

                    )
                }

            </div>
            {
                showModal && (<FilterModal></FilterModal>)
            }
        </div>
    );
};

export default Home;