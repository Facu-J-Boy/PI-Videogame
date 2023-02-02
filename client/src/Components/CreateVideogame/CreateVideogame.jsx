import React, { useEffect } from "react";
import "./CreateVideogame.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllGenres,
  getAllPlatforms,
  PostVideogame,
} from "../../redux/Actions/index.js";
import Loading from "../Loading/Loading";

const CreateVideogame = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
    dispatch(getAllPlatforms());
  }, [dispatch]);

  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  // const postVideogame = useState((state) => state.postVideogame);

  const [game, setGame] = useState({
    name: "",
    background_image: "",
    description: "",
    released: "",
    rating: 0,
    genres: [],
    platforms: [],
  });

  console.log(game);

  const handleInputChange = (ev) => {
    setGame({
      ...game,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleGenresChange = (ev) => {
    ev.target.checked
      ? setGame({
          ...game,
          [ev.target.name]: [...game.genres, ev.target.value],
        })
      : setGame({
          ...game,
          [ev.target.name]: game.genres.filter((el) => el !== ev.target.value),
        });
  };

  const handlePlatformsChannge = (ev) => {
    ev.target.checked
      ? setGame({
          ...game,
          [ev.target.name]: [...game.platforms, ev.target.value],
        })
      : setGame({
          ...game,
          [ev.target.name]: game.platforms.filter(
            (el) => el !== ev.target.value
          ),
        });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(PostVideogame(game));
  };

  return !genres.length && !platforms.length ? (
    <Loading />
  ) : (
    <div className="space">
      <div className="formField">
        <form
          name="form"
          onSubmit={(ev) => {
            handleSubmit(ev);
          }}
        >
          <div>
            <label className="label">Name:</label>
            <input
              className="input"
              type="text"
              placeholder="name"
              name="name"
              value={game.name}
              onChange={(ev) => {
                handleInputChange(ev);
              }}
            />
          </div>
          <div>
            <label className="label">Image:</label>
            <input
              className="input"
              type="file"
              name="background_image"
              value={game.background_image}
              onChange={(ev) => {
                handleInputChange(ev);
              }}
            />
          </div>
          <div>
            <label className="label">Description:</label>
            <input
              className="input"
              type="text"
              placeholder="description"
              name="description"
              value={game.description}
              onChange={(ev) => {
                handleInputChange(ev);
              }}
            />
          </div>
          <div>
            <label className="label">Released:</label>
            <input
              className="input"
              type="date"
              name="released"
              value={game.released}
              onChange={(ev) => {
                handleInputChange(ev);
              }}
            />
          </div>
          <div>
            <label className="label">Rating:</label>
            <input
              className="input"
              type="number"
              name="rating"
              value={game.rating}
              step="0.1"
              min="0"
              max="5"
              onChange={(ev) => {
                handleInputChange(ev);
              }}
            />
          </div>
          <div>
            <label className="label">Select genres:</label>
            <div className="checkboxContainer">
              {genres?.map((e) => {
                return (
                  <div className="checkboxElement">
                    <input
                      className="checkbox"
                      type="checkbox"
                      id={e.id}
                      key={e.id}
                      name="genres"
                      value={e.name}
                      onChange={(ev) => {
                        handleGenresChange(ev);
                      }}
                    ></input>
                    <label>{e.name}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <label className="label">Select platforms:</label>
            {platforms?.map((e) => {
              return (
                <div className="checkboxElement">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id={e.id}
                    key={e.id}
                    name="platforms"
                    value={e.name}
                    onChange={(ev) => {
                      handlePlatformsChannge(ev);
                    }}
                  ></input>
                  <label>{e.name}</label>
                </div>
              );
            })}
          </div>
          <div>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateVideogame;
