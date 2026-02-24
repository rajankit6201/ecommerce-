import React from "react";
import DynamicSearchBar from "./DynamicSearchBar.jsx";
import { Link } from 'react-router-dom';
const Navbar = ({ hideSearchBar = false }) => {
    return (
        <div className="flex h-18 bg-blue-900 h-15vh border-2 justify-evenly items-center">
            <Link to="/" className="font-extrabold text-white">Shopsy
            </Link>


            {/* <input className="text-white spaace-x-5 border-none border-r rounded-bl-{10px} pl-{10px} pr-{10px}" placeHolder="inter text" type="text" /> */}
            {!hideSearchBar && <DynamicSearchBar />}


            <div className="flex justify-between items-center w-1/9">
                <p className="font-extrabold text-white">wishlist</p>
                <p className="font-extrabold text-white" >Cart</p>
            </div>

        </div>
    )
}
export default Navbar;