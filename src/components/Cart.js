import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart, incrementProduct } from "../redux/actions/index"
import handleCart from "../redux/reducer/handleCart"

function Cart() {
    const product = useSelector((product) => product.handleCart);

    const dispatch = useDispatch();
    
    
    const removeProduct = (productid) => {
       // console.log(productid);
        dispatch(deleteCart(productid));
     }

    const handleBtn = (product, act) => {
       dispatch(incrementProduct(product,act));
    }

    return(
       
            <>
        <div className="container my-3 py-3">
        <div className="row">
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder txt-center">CART ITEMS</h1>
                </div>
            </div>
            <div className="row py-10 mb-2 bdr-btm pb-2">
            {
                product.map((pro) => {
                    return(
                        <>
                        <div className="col-3">
                            <img src={pro.image} alt={pro.title} width="180px" height="200px" />
                        </div>
                        <div className="col-6">
                            <h3>{pro.title}</h3>
                            
                            <p className="lead">
                                {pro.qty} X ${pro.price} = $ {pro.qty * pro.price}
                            </p>
                            <button className="btn btn-outline-dark me-2" onClick={() => { handleBtn(pro.id, "inc") }}>+</button>
                            <button className="btn btn-outline-dark" onClick={() => { handleBtn(pro.id, "dec") }}>-</button>
                            
                        </div>
                        <div className="col-3">
                        <button className="btn btn-outline-dark" onClick={() => { removeProduct(pro.id) }}>Remove</button>
                        </div>
                        <hr />
                    </>
                    );
                })
            }
           
            </div>
           
        </div>
        </>
        
        
    );
}

export default Cart;