import React, { useState, useEffect } from "react";
import ShowProducts from "./ShowProducts";
import Loading from "./Loading";
import Pagination from "./Pagination";

function Products() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsloading] = useState(false);
       
    const [currentPage, setCurrentPage] = useState(1);
    const recordsperPage = 4;
    

    let componentMount = true;

    useEffect(() => {

        const getProducts = async () => {
            setIsloading(true);
            const response = await fetch("http://localhost:3000/Product");
            if (componentMount) {
                setPosts(await response.json());
                setIsloading(false)
            }
           
            return () => {
                componentMount = false;
            }
        }
        getProducts();
    }, []);
   
    const lastIndexPost = currentPage * recordsperPage;
    const firstIndexPost = lastIndexPost - recordsperPage;
    const currentData = posts.slice(firstIndexPost,firstIndexPost);

    console.log(currentData)

   /*  const filterProduct = (cat) => {
        const filt = posts.filter((x) => x.category === cat);
        setPosts(filt);
    } */

     //pagination
   /*  const prevPage = () => {
        if (currentPage !== firstIndexPost) {
            setCurrentPage(currentPage - 1)
        }
    }*/
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
   /*  const nextPage = () => {
        if (currentPage !== lastIndexPost) {
            setCurrentPage(currentPage + 1)
        }
    }
 */
    
    return (
        <>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder txt-center">LATEST PRODUCTS</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-5">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search Products" value="" aria-label="Products" aria-describedby="button-addon2" />
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        (isLoading) ? <Loading /> : <ShowProducts posts={posts} />
                    }

                </div>
                <div className="row justify-content-end py-5">
                 <Pagination currentPage={currentPage} recordsperPage={recordsperPage} totalPosts={posts.length} paginate={paginate} />
                </div>
            </div>
        </>
    );

}
export default Products;