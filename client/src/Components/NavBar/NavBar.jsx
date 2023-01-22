import "./NavBar.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  searchVideogame,
  getAllGenres,
  getAllPlatforms,
  filterByGenre,
  filterByPLatform,
  OrderByName,
  OrderByRating,
  clearVideogames,
} from "../../redux/Actions";

const NavBar = ({ setCurrentPage }) => {
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);

  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleInputChange = (ev) => {
    setName(ev.target.value);
  };

  const filterGenre = (ev) => {
    dispatch(filterByGenre(ev.target.value));
    console.log(ev.target.value);
  };

  const filterPlatform = (ev) => {
    dispatch(filterByPLatform(ev.target.value));
  };

  const orderName = (ev) => {
    dispatch(OrderByName(ev.target.value));
    setCurrentPage(1);
  };

  const orderRating = (ev) => {
    dispatch(OrderByRating(ev.target.value));
    setCurrentPage(1);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(clearVideogames());
    dispatch(searchVideogame(name));
  };

  useEffect(() => {
    dispatch(getAllGenres());
    dispatch(getAllPlatforms());
  }, [dispatch]);

  return (
    <div className="label">
      {/* <form onSubmit={handleSubmit}>
        <label>Search game: </label>
        <input
          type="text"
          value={name}
          onChange={(ev) => {
            handleInputChange(ev);
          }}
        />
        <button type="submit">search</button>
      </form> */}
      <div className="box">
        <form
          onSubmit={handleSubmit}
          className="search"
          action="/search"
          method="get"
        >
          <input
            className="search-input"
            autocomplete="off"
            name="q"
            placeholder="Search videogame"
            type="text"
            value={name}
            onChange={(ev) => {
              handleInputChange(ev);
            }}
          />
          <button className="search-button" type="submit">
            <svg className="search" viewBox="0 0 56.966 56.966">
              {" "}
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>{" "}
            </svg>
          </button>
        </form>
      </div>
      <label>Filter by: </label>
      <label>genres </label>
      <select
        onChange={(ev) => {
          filterGenre(ev);
        }}
      >
        <option>All</option>
        {genres?.map((e) => {
          return (
            <option key={e.id} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>
      <label>platforms </label>
      <select
        onChange={(ev) => {
          filterPlatform(ev);
        }}
      >
        <option>All</option>
        {platforms?.map((e) => {
          return (
            <option key={e.id} value={e.name}>
              {e.name}
            </option>
          );
        })}
      </select>
      <label>Order by: </label>
      <label>Name </label>
      <select onChange={(ev) => orderName(ev)}>
        <option>A-Z</option>
        <option>Z-A</option>
      </select>
      <label>Rating </label>
      <select onChange={(ev) => orderRating(ev)}>
        <option> 1-5 </option>
        <option> 5-1 </option>
      </select>
      <Link to={"/home/create"}>
        <button>Create</button>
      </Link>
    </div>
  );
};

export default NavBar;
