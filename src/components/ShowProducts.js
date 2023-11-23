import React from "react";
import { NavLink } from "react-router-dom";

function ShowProducts({posts}){

    console.log(posts)

    return(
        <>
           {/*  <div className="buttons">
                    <button className="btn btn-outline-dark me-2" onClick={() => { setPosts(posts) }}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("men's clothing") }}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("women's clothing") }}>WoMen's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("jewelery") }}>JEWELLS</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => { filterProduct("electronics") }}>Electornics</button>
                </div> */}

                {
                    posts.map((product) => {
                        return (
                            <div className="col-md-3 mb-2 mt-4">
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt="..." height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p class="card-text lead fw-bold">{product.price}</p>
                                        <NavLink to={`/products/${product.id}`} class="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
        </>
    );
}
export default ShowProducts;