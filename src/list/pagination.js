import React from 'react';
import './pagination.css'

function Pagination(props) {
    const {handlePaginationClick, page, totalPages, handlePerPageChange, currentPerPage} = props;
    // const handlePaginationClick = props.handlePaginationClick
    // const page = props.page
    return(
        <div className='Pagination'>
            <button disabled={page === 1} className='Pagination-button' onClick={() => handlePaginationClick('prev')}>&larr;</button>
            <span>page {page} of {totalPages}</span>
            <button disabled={page === totalPages} className='Pagination-button' onClick={() => handlePaginationClick('next')}>&rarr;</button>
                <label >Lines per page</label>
                    <select className="select" value={currentPerPage} onChange={(event) => handlePerPageChange(event.target.value)} >
                        <option value={10} className='20'>10</option>
                        <option  value={20} className='25'>20</option>
                        <option value={50} className='50'>50</option>
                        <option value={100} className='100'>100</option>
                    </select>
        </div>
    )
}

export default Pagination;