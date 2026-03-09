import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

function ProductData() {
    const [data, setData] = useState([]);
    const [loading, setLoding] = useState(true);
    const [error, setError] = useState(false);
    const [currentpage, setcurrentPage] = useState(1);
    



    async function getData() {
        try {
            let limit = 12;
            let skip = (currentpage-1)*limit;
            const apiData = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            console.log(apiData);
            console.log("hello");
            
            const jsonData = await apiData.json();
            setData(jsonData.products);


        }
        catch (err) {
            console.log(err);
            setError(true);


        }
        finally {
            setLoding(false);
        }
    }

    useEffect(() => {
        getData();
    }, [currentpage]);

    if (loading) {
        return <ProductCardSkeleton />;
    }
    if (error) {
        return <p>api is not working </p>;
    }

    return (
        <div className="">
            <div className="flex h-1/8 flex-wrap">
                {data.map((pObj) => (
                    <ProductCard key={pObj.id} data={pObj} />
                ))}
            </div>
            
            <div className="join flex justify-center  m-4 text-green-900" >
                <button onClick={()=>{setcurrentPage(1)}}  className="join-item btn {currentpage==1 ? btn-active : btn-unactive} ">1</button>
                <button onClick={()=>{setcurrentPage(2)}} className="join-item btn {currentpage==2 ? btn-active : btn-unactive}">2</button>
                <button onClick={()=>{setcurrentPage(3)}} className="join-item btn {currentpage==3 ? btn-active : btn-unactive} ">3</button>
                <button onClick={()=>{setcurrentPage(4)}} className="join-item btn {currentpage==4 ? btn-active : btn-unactive} ">4</button>
            </div>

        </div>
    );
}

export default ProductData;





