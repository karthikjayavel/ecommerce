import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions/index"
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";


function Product(){

    const {id} = useParams();

    const [product, setProduct] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product))
    }


    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:3000/Product/${id}`);
            setProduct(await response.json());
            setLoading(false);
           // console.log(product)
        }
        getProduct(id);

    }, [product.id])


    const Loading = () => {
        return(
            <>
            <div className="col-md-6">
                <Skeleton height={400} />
            </div>
            <div className="col-md-6">
                <Skeleton height={50} />
            </div>
            <div className="col-md-6">
                <Skeleton height={75} />
            </div>
            <div className="col-md-6">
                <Skeleton height={75} />
            </div>
            <div className="col-md-6">
                <Skeleton height={150} />
            </div>
            <div className="col-md-6">
                <Skeleton height={150} />
            </div>
            <div className="col-md-6">
                <Skeleton height={50} />
            </div>
            <div className="col-md-6">
                <Skeleton height={75} />
            </div>
            <div className="col-md-6">
                <Skeleton height={75} />
            </div>
            </>
        );
    }
    
    const Showproduct = () => {
        return(
            <>
           
                        
                                <div className="col-md-6">
                                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                                </div>
                                <div className="col-md-6">
                                    <h4 className="text-uppercase text-black-50">
                                        {product.category}
                                    </h4>
                                    <h1 className="display-5">{product.title}</h1>
                                    <p className="lead fw-bold">Rating { product.rating && product.rating.rate } <i className="fa fa-star"></i></p>
                                    <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
                                    <p className="lead">{product.description}</p>
                                    <button className="btn btn-outline-dark me-3" onClick={() => { addProduct(product) }}>Add to cart</button>
                                    <NavLink to="/cart" className="btn btn-dark">Go to Cart</NavLink>
                                </div>
                           
                    
                
            </>
        )
    }

    return(
        <>
<div className="container py-5">
<div className="row">
    {isLoading?<Loading /> : <Showproduct />}
</div>
</div>
        </>
    );
}

export default Product;