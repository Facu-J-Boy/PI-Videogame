import './Pagination.css';
import React from 'react';


const Pagination = ({date, gamesPerPage, currentPage, onPreviousPage, onNextPage, onSpecificPage, totalVideoGames}) => {

    const pageNumber = [];

    for(let i = 1 ; i <= Math.ceil (totalVideoGames / gamesPerPage); i++){
        pageNumber.push(i);
    }

  return (
    <nav className='Pagination'>
        <li className={`button${currentPage === 1?'IsHidden': ''} page`} onClick={onPreviousPage}>{"<"}</li>
            {pageNumber.map((e) => 
            {return (
              <li key={e} className={
                `page${e === currentPage? 'isCurrent': ''
              }`} onClick={() => onSpecificPage(e)} >
                  <span>{e}</span>                    
                  </li>
            )})}
        <li className={`button${currentPage === pageNumber.length || !date.length?'IsHidden':''} page`} onClick={onNextPage}>{">"}</li>
    </nav>
  )
}

export default Pagination