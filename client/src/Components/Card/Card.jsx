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
              "https://res.cloudinary.com/dvqh0exq6/image/upload/v1675621139/videogame/n2ms87rhxzstoqdm9gbr.png";
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
      <div className="rating">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-star"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
        <h5 className="number">{props.rating}</h5>
      </div>
    </div>
  );
};
