import './Card.css';
import React from 'react';
import {Link} from 'react-router-dom';

export const Card = (props) => {
  return (
  <div className = 'card'>
     <Link to={`/home/game/${props.id}`}><h3>{props.name}</h3></Link>
     <img src = {props.background_image} alt={props.name} />
     <div className = 'genre'>
      <h3>
         {props.Genres.join(', ')}
      </h3>
     </div>
 </div>
  )
}
