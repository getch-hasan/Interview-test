import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/airbnb log.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchLocations from '../Hooks/SearchLocations';

const Nabvar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isModal, setIsModal] = useState(false)
    const [searchQuery, setSearchQuery, locations, setLocations, handleSearch] = SearchLocations()

    const dropdownRef = useRef();
    // const modalRef = useRef()
    const handleButtonClick = () => {
        setShowDropdown(true);
        setIsModal(true)

        console.log('drop', showDropdown) // Toggle the dropdown when the button is clicked
        console.log('modal', isModal) // Toggle the dropdown when the button is clicked


    };
    const closeModal = () => {
        setIsModal(false);
        setShowDropdown(false)
        console.log('drop', showDropdown) // Toggle the dropdown when the button is clicked
        console.log('modal', isModal)

    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeModal();
            }


        };

        if (isModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModal]);

    const handelDestination = (e) => {
        setShowDropdown(true);
        setIsModal(true)
        console.log('drop', showDropdown) // Toggle the dropdown when the button is clicked
        console.log('modal', isModal)

    }
    const handelCheckIn = () => {
        setShowDropdown(true);
        console.log('clicked')
        setIsModal(true)


    }
    const handelCheckOut = () => {
        setShowDropdown(true);
        console.log('clicked')

    }
    const handelGuests = () => {
        setShowDropdown(true);
        console.log('clicked')
    }

    return (
        <nav class=" bg-white border-b-2 w-full"  >
            <div class="mx-auto py-5 max-w-7xl sm:px-6 lg:px-8">
                <div class="relative grid grid-cols-3 h-16  items-center justify-between">

                    <div class=" items-center justify-start sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <img class="h-8 w-auto" src={logo} alt="Your Company" />
                        </div>

                    </div>
                    <div className=''>
                        {
                            !showDropdown && (
                                <div className='flex gap-3 items-center hover:shadow-xl border justify-start px-6 rounded-3xl shadow-lg py-2'>
                                    <button onClick={() => handleButtonClick()} className='text-lg font-semibold border-r-2 pr-5' aria-expanded="false">Any where </button>
                                    <button onClick={() => handleButtonClick()} className='text-lg font-semibold border-r-2 pr-5'>Any week</button>
                                    <button onClick={() => handleButtonClick()} className=' text-lg  '>Any guest</button>
                                    <button onClick={() => handleButtonClick()} >  <FontAwesomeIcon className='bg-red-500 p-2 rounded-full text-cyan-50' icon={faMagnifyingGlass} size="md" /></button>

                                </div>
                            )
                        }
                    </div>
                    <div class=" absolute right-0 justify-end   pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div class=" ms-20 flex justify-end items-center ">
                            <h1 className='font-semibold'>Airbnb your home</h1>
                            <button type="button" class=" ms-4 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div ref={dropdownRef} >
                    {
                        showDropdown && (
                            <div className='flex justify-center  py-4 bg-slate-100  gap-3'>
                                <button onClick={() => handelDestination()} className='border hover:bg-slate-100 rounded-full active:bg-slate-500 bg-white shadow-lg px-4 py-2' >where <br /> <input className='bg-white border-none hover:bg-slate-100' type="text"
                                    value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} name='search' placeholder="Search destinations" /></button>
                                <button onClick={handelCheckIn} className='border     hover:bg-slate-100 rounded-full bg-white shadow-lg px-4 py-2' >Check in <br />Add date</button>
                                <button onClick={handelCheckOut} className='border    hover:bg-slate-100 rounded-full bg-white shadow-lg px-4 py-2' >Check Out <br />add date</button>
                                <div className='border flex items-center rounded-full hover:bg-slate-100 bg-white shadow-lg ps-4 '>
                                    <button onClick={handelGuests}  >who <br />add guests</button>
                                    <button className='bg-red-500 ms-4 rounded-full height-full py-4 px-4  flex items-center'
                                        onClick={handleSearch} > Search
                                        <FontAwesomeIcon className=' py-2 ps-2 rounded-full text-cyan-50' icon={faMagnifyingGlass} size="lg" />
                                    </button>

                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/*  {isModal && (
                <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div class="w-screen max-w-md flex-auto  rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <h1>amre hudai kn dekhai rakhsen</h1>
                    </div>
                    <button>X</button>
                </div>
            )} */}


        </nav>

    );
};

export default Nabvar;