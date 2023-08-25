import  { useEffect, useState } from 'react';

const Allhotel = () => {

    const [products, setProducts] = useState([])
    const [filteredProduct,setFilteredProduct]=useState([])
    useEffect(() => {
        fetch('http://localhost:8000/alldata')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setFilteredProduct(data)
            })
    }, [])
    return [products,setProducts,filteredProduct,setFilteredProduct]
};

export default Allhotel;