import React from "react";

function Pagination({currentPage, recordsperPage, totalPosts, paginate}) {
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalPosts/recordsperPage);i++){
        pageNumbers.push(i);
    }
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                    <li class="page-item">
                        <a class="page-link">Previous</a>
                    </li>
                    {
                        pageNumbers.map((n, i) => (
                            <li class={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                <a class="page-link" onClick={() => paginate(n)}>{n}</a></li>
                        ))
                    }
                    <li class="page-item">
                        <a class="page-link">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Pagination;