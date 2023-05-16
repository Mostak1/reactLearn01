import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://dummyjson.com/products';

export const Axios = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setProducts(response.data.products);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className='container'>
                .
                <h1>Product List</h1>
                <div className='row'>

                    {products.map((product) => (

                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <img src={product.images[0]} height={300} class="card-img-top" alt="uploading" />
                                <div class="card-body">
                                    <h5 class="card-title" key={product.id}>{product.title}</h5>
                                    <p class="card-text text-decoration-line-through text-danger">Price : {product.price} TK</p>
                                    <p class="card-text ">Discount Price: {product.price - product.discountPercentage*product.price/100} TK</p>
                                </div>
                                <div class="card-footer text-center">
                                    <a href="" className='btn btn-outline-danger'>Details Here</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Axios;
