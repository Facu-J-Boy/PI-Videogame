import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="card">
      <Link to={`/home/game/${props.id}`} className="cardLink">
        <h3>{props.name}</h3>
        <img
          src={props.background_image}
          alt={props.name}
          onError={(ev) => {
            ev.target.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LMrAuTx6iby0J0ItKPAqYkeuYHwbCKxSUA&usqp=CAU";
          }}
        />
      </Link>
      <div className="genreConteiner">
        {props.Genres.map((gen) => (
          <li className="genre" key={gen}>
            {gen}
          </li>
        ))}
      </div>
      <h5 className="rating">Rating: {props.rating}</h5>
    </div>
  );
};
