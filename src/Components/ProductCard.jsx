import react, { useState } from 'react';
import Star from './Icons/Star.jsx'
import { Link } from 'react-router-dom'
const ProductCard = ({ data }) => {
    const [showMore, setShowMore] = useState(false);
    const { title, description, category, price, thumbnail , id } = data;
    let d = description
    // desc = description.length > 50 ? description.substring(0, 50) : description;

    function SeeMore() {
        setShowMore((prev) => !prev);
    }
    return (
        <Link
            to={`/products/${id}`}

            className="border-2 bg-white-600 font-medium w-[23%]  h-[90%] m-3 rounded-2xl hover:bg-gray-700 transition duration-400 ease-in-out p-4 hover:-translate-y-2"
        >
            <img src={thumbnail} alt="picture" />
            <p>{category}</p>

            <p>{title}</p>
            <p>{price}$</p>
            <Star hight={20} width={24} />

            <p onClick={SeeMore} >
                {showMore ? description : description.slice(0, 100)}
            </p>

            <div className="flex m-1 ">
                <button className="border-2 w-full bg-green-400 rounded-md mr-3">Add to Card</button>
                <button className="border-2 w-full bg-yellow-400 rounded-md ">wishlist</button>
            </div>


        </Link>
    )
}
export default ProductCard;
















































// import React from "react";

// const ProductCard = ({ data }) => {
//   const { title, description, category, price, thumbnail } = data;

//   return (
//     <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

//       {/* Image */}
//       <div className="h-48 w-full bg-gray-100 flex items-center justify-center">
//         <img
//           src={thumbnail}
//           alt={title}
//           className="h-full object-contain p-4"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-4 space-y-2">

//         <span className="text-xs text-blue-600 font-semibold uppercase">
//           {category}
//         </span>

//         <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
//           {title}
//         </h2>

//         <p className="text-sm text-gray-600 line-clamp-2">
//           {description}
//         </p>

//         <div className="flex items-center justify-between pt-2">
//           <p className="text-lg font-bold text-green-600">
//             ₹ {price}
//           </p>

//           <button className="px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">
//             Add to cart
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProductCard;
