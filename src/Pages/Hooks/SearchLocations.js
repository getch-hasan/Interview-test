import { useState } from "react";
import Allhotel from "./Allhotel";

const SearchLocations = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [locations, setLocations] = useState('')
    const [products, setProducts,filteredProduct, setFilteredProduct] = Allhotel()
    console.log(searchQuery)


    const handleSearch = () => {
        setLocations(searchQuery)
        console.log('clicked', locations)
        console.log(products)
        const filtered = products.filter((product) =>
        product.location.toLowerCase().includes(locations.toLowerCase()) )
        setFilteredProduct(filtered)
       

    };
    return [searchQuery, setSearchQuery, locations, setLocations, handleSearch,filteredProduct,setFilteredProduct]
    ;
};

export default SearchLocations;