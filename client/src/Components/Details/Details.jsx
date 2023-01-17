import './Detail.css';
import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getDetail} from '../../redux/Actions/index.js';

const Details = (props) => {

  const date = useSelector((state) => state.gameDetail);
  console.log('date-->', date);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch (getDetail(props.match.params.id))
  }, [dispatch, props.match.params.id]);

  return (
    <div className = 'detail'>
      <h1>{date.name}</h1>
      <img src={date.background_image} alt={date.name} />
      <h5>Rating: {date.rating}</h5>
      <h5>Released: {date.released}</h5>
      <h5>Description: </h5>
      {date.description}
      <h5>Platforms: </h5>
      {date.Platforms?.map((e) => {
        return(
          <ul key={e.name}>{e.name}</ul>
        )
      })}
      <h5>Genres: </h5>
      {date.Genres?.map((e) => {
        return(
          <ul key={e.name}>{e.name}</ul>
        )
      })}
      </div>
  )
}

export default Details;