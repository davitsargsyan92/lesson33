import React from 'react';
import './pagination.css'

function Pagination(props) {
    const {handlePaginationClick, page, totalPages} = props;
    // const handlePaginationClick = props.handlePaginationClick
    // const page = props.page
    return(
        <div className='Pagination'>
            <button disabled={page === 1} className='Pagination-button' onClick={() => handlePaginationClick('prev')}>&larr;</button>
            <span>page {page} of {totalPages}</span>
            <button disabled={page === totalPages} className='Pagination-button' onClick={() => handlePaginationClick('next')}>&rarr;</button>
        </div>
    )
}

export default Pagination;