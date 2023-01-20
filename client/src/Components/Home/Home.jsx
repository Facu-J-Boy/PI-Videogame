import './Home.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllVideogames} from '../../redux/Actions/index.js';
import { Card } from '../Card/Card.jsx';
import Pagination from '../Pagination/Pagination';
import NavBar from '../NavBar/NavBar';
import Loading from '../Loading/Loading';

const Home = () => {

  const dispatch = useDispatch();
  const date = useSelector((state) => state.allVideogames);
  
  useEffect(() => {
    dispatch(getAllVideogames())
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;
  
  const lastIndex = currentPage * gamesPerPage;
  const firstIndex = lastIndex - gamesPerPage;
  const games = date.slice(firstIndex, lastIndex);
  
  const totalVideoGames = date.length;
  
  const pageNumber = [];
  
  for(let i = 1 ; i <= Math.ceil (totalVideoGames / gamesPerPage); i++){
      pageNumber.push(i);
  }

  const onPreviousPage = () => {
   setCurrentPage(currentPage - 1);
  }

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  }

  return (
    <div>
      <div>
        <NavBar 
        setCurrentPage={setCurrentPage} />
        <hr/>
      </div>
    <div>
        <br/>
        <br/>
      <Pagination
        date = {date}
        gamesPerPage={gamesPerPage} 
        totalVideoGames={totalVideoGames}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
        onSpecificPage={onSpecificPage}
        currentPage={currentPage}
        />
        <br/>
        <br/>
      <div  className = 'home'>
        {!date.length? <Loading />
        :
        games.map((e) => {
         return (
         <Card 
         key = {e.id}
         id = {e.id}
         name = {e.name}
         background_image = {e.background_image}
         rating={e.rating}
         Genres = {e.Genres}
         Platforms={e.Platforms}
         />
         )
       })}
      </div>
      <div>
        <br/>
        <br/>
        <Pagination
        date = {date}
        gamesPerPage={gamesPerPage} 
        totalVideoGames={totalVideoGames}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
        onSpecificPage={onSpecificPage}
        currentPage={currentPage}
        />
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
    </div>
  )
}

export default Home