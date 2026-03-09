// import React,{useState , useEffect} from "react";
// import Navbar from "../Components/Navbar.jsx";
// import { useParams } from "react-router-dom";
// import PdpSkeleton from "../Components/PdpSkeleton .jsx";

// const Pdp = () => {
//   const [loading, setLoading] = useState(true);
//   const [productdata, setProductdata] = useState(null);
//   const [error, setError] = useState(null);
//   console.log(productdata);
  
//  const { id } = useParams();

//   async function getData() {
//     try {
//       let apiData = await fetch(`https://dummyjson.com/products/${id}`);
//       let jsonData =await  apiData.json();
//       setProductdata(jsonData);
      
//     }
//     catch (err){
//       setError("Something went wrong!");

//     }
//     finally {
//       setLoading(false);
//     }
//   }

//   useEffect(()=> {
//     if (id) {
//       getData();
//     }
//     else {
//       setError("product not found");
//       setLoading(false);
//     }
//   },[id]);

//   return (
//     <>
//       <Navbar hideSearchBar={true} />
//       {loading && <PdpSkeleton />}
//       <div>

//       </div>
//     </>
//   );
// };

// export default Pdp;

import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import { useParams } from "react-router-dom";
import PdpSkeleton from "../Components/PdpSkeleton.jsx";

const Pdp = () => {

  const [loading, setLoading] = useState(true);
  const [productdata, setProductdata] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  async function getData() {
    try {
      let apiData = await fetch(`https://dummyjson.com/products/${id}`);
      let jsonData = await apiData.json();
      setProductdata(jsonData);
    } 
    catch (err) {
      setError("Something went wrong!");
    } 
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      getData();
    } else {
      setError("Product not found");
      setLoading(false);
    }
  }, [id]);

  return (
    <>
      <Navbar hideSearchBar={true} />

      {loading && <PdpSkeleton />}

      {error && <h2 style={{ textAlign: "center" }}>{error}</h2>}

      {!loading && productdata && (

        <div style={{
          maxWidth: "1100px",
          margin: "40px auto",
          display: "flex",
          gap: "40px",
          padding: "20px"
        }}>

          {/* Product Image */}
          <div style={{ flex: 1 }}>
            <img
              src={productdata.thumbnail}
              alt={productdata.title}
              style={{
                width: "100%",
                borderRadius: "10px"
              }}
            />
          </div>

          {/* Product Details */}
          <div style={{ flex: 1 }}>

            <h1>{productdata.title}</h1>

            <p style={{ color: "gray", marginTop: "10px" }}>
              {productdata.description}
            </p>

            <h2 style={{ marginTop: "20px", color: "green" }}>
              ${productdata.price}
            </h2>

            <p style={{ marginTop: "10px" }}>
              Rating ⭐ {productdata.rating}
            </p>

            <p style={{ marginTop: "10px" }}>
              Brand: {productdata.brand}
            </p>

            <p style={{ marginTop: "10px" }}>
              Category: {productdata.category}
            </p>

            <button
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Add to Cart
            </button>

          </div>

        </div>
      )}
    </>
  );
};

export default Pdp;