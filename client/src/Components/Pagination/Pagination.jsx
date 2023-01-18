import './Pagination.css';
import React from 'react';


const Pagination = ({date, gamesPerPage, currentPage, onPreviousPage, onNextPage, onSpecificPage, totalVideoGames}) => {

    const pageNumber = [];

    for(let i = 1 ; i <= Math.ceil (totalVideoGames / gamesPerPage); i++){
        pageNumber.push(i);
    }

  return (
    <div className='Pagination'>
        <button className={`button${currentPage === 1?'IsHidden': ''}`} onClick={onPreviousPage}>Prev</button>
        <button className={`button${currentPage === pageNumber.length || !date.length?'IsHidden':''}`} onClick={onNextPage}>Next</button>
        <div>
            {pageNumber.map((e) => 
            {return (
                <ol key={e}>
                  <ul className={
                    `page${e === currentPage? 'isCurrent': ''
                }`} onClick={() => onSpecificPage(e)} >
                    {e}
                  </ul>
                </ol>
            )})}
        </div>
    </div>
  )
}

export default Pagination