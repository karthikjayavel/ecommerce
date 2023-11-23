import React from "react";
import Products from "./Products";


function Home() {
    return(
        <>
        <div className="hero">
        <div className="card bg-dark text-white border-0">
        <img src="./assets/bg.jpg" className="card-img" alt="bg" height="450px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
           <div classNameName="container">
            <h5 className="card-title display-3">NEW SEASON ARRAIVALS</h5>
            <p className="card-text display-6">CHECK OUT ALL RESOURCE</p>
            </div>
        </div>
        </div>
        </div>
        <Products />
        </>
    );
}
export default Home;