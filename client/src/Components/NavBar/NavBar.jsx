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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search game: </label>
        <input
          type="text"
          value={name}
          onChange={(ev) => {
            handleInputChange(ev);
          }}
        />
        <button type="submit">search</button>
      </form>
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
