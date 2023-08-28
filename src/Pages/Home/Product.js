import React from 'react';
import star from '../../assets/Star background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClover, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
const Product = ({ product, isOn }) => {
    const { name, totalCost, freeDates, nightCost, location, ratingOutOf5 } = product
    return (
        <div class="group relative justify-center rounded-xl border">
            <div class="rounded-xl aspect-h-1 aspect-w-1 w-full   bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <button className='absolute  right-4 top-3'><FontAwesomeIcon className='text-none' icon={faHeart} size='sm' ></FontAwesomeIcon></button>
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
                <div className='grid ms-2 mb-2 grid-cols-1'>
                    <h3 class="text-sm  text-start font-bold">
                        {location}
                    </h3>
                    <p class=" text-start mt-1 text-sm text-gray-500">{name}</p>
                    <p class=" text-start mt-1 text-sm text-gray-500">{freeDates[0]}</p>
                    {
                        isOn ? <a class="mt-1 text-sm text-gray-500 text-start"> <span className='font-semibold text-black'>${totalCost}</span> total before texes</a> : <p class="mt-1 text-start text-sm text-gray-500"> <span className='font-semibold text-black'>${nightCost}</span> night</p>
                    }

                </div>
                <p class="text-sm font-medium text-gray-900"> <FontAwesomeIcon icon={faStar} size='sm' ></FontAwesomeIcon> {ratingOutOf5}</p>
            </div>
        </div>
    );
};

export default Product;