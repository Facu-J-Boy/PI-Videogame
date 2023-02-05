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
    background_image:
      "https://res.cloudinary.com/dvqh0exq6/image/upload/v1675621139/videogame/n2ms87rhxzstoqdm9gbr.png",
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

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setGame({
        ...game,
        background_image: reader.result,
      });
    };
  };

  const handleFileChange = (ev) => {
    setFileToBase(ev.target.files[0]);
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

  return !genres.length || !platforms.length ? (
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
          <div className="inputArea">
            <div className="firstColumn">
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
            </div>
            <div>
              <div className="custom-input-file col-md-6 col-sm-6 col-xs-6">
                {/* <label className="fileContainer">Image:</label> */}
                <input
                  id="fichero-tarifas"
                  className="input-file"
                  aria-label="Archivo"
                  type="file"
                  name="background_image"
                  file={game.background_image}
                  onChange={(ev) => {
                    handleFileChange(ev);
                  }}
                />
                {"select a image"}
              </div>
              <img
                className="image"
                src={game?.background_image}
                alt="..."
                onError={(ev) => {
                  ev.target.src =
                    "https://res.cloudinary.com/dvqh0exq6/image/upload/v1675621139/videogame/n2ms87rhxzstoqdm9gbr.png";
                }}
              />
            </div>
            <div>
              <label className="label">Description:</label>
              <input
                className="inputDescription"
                type="text"
                name="description"
                value={game.description}
                onChange={(ev) => {
                  handleInputChange(ev);
                }}
              />
            </div>
          </div>
          <div>
            <label className="label">Select genres:</label>
            <div className="checkboxContainer">
              {genres?.map((e) => {
                return (
                  <li key={e.id} className="checkboxElement">
                    <input
                      className="checkbox"
                      type="checkbox"
                      id={e.id}
                      name="genres"
                      value={e.name}
                      onChange={(ev) => {
                        handleGenresChange(ev);
                      }}
                    ></input>
                    <label htmlFor={e.id}>{e.name}</label>
                  </li>
                );
              })}
            </div>
          </div>
          <div>
            <label className="label">Select platforms:</label>
            {platforms?.map((e) => {
              return (
                <li key={e.id} className="checkboxElement">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id={e.id}
                    name="platforms"
                    value={e.name}
                    onChange={(ev) => {
                      handlePlatformsChannge(ev);
                    }}
                  ></input>
                  <label htmlFor={e.id}>{e.name}</label>
                </li>
              );
            })}
          </div>
          <div>
            <button className="button" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateVideogame;
