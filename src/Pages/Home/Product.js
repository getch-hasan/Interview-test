import React from 'react';
import star from '../../assets/Star background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Product = ({ product }) => {
     const {name,totalCOst,freeDate,nightCost,location,category,ratingOutOf5}=product
    return (
        <div class="group relative justify-center rounded-xl border">
            <div class=" rounded-xl aspect-h-1 aspect-w-1 w-full   bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
                <div>
                    <h3 class="text-sm font-bold">
                    {location}
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">{name}</p>
                    <p class="mt-1 text-sm text-gray-500">{freeDate}</p>
                    <p class="mt-1 text-sm text-gray-500"> <span className='font-semibold text-black'>${nightCost}</span> night</p>
                    
                </div>
                <p class="text-sm font-medium text-gray-900"> <FontAwesomeIcon icon={faStar} size='sm' ></FontAwesomeIcon> {ratingOutOf5}</p>
            </div>
        </div>
    );
};

export default Product;