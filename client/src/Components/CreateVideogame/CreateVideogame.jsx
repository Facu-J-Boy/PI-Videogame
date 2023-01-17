import React from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {PostVideogame} from '../../redux/Actions/index.js';

const CreateVideogame = () => {

  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  // const postVideogame = useState((state) => state.postVideogame);

  const [game, setGame] = useState({
    name: '',
    background_image: '',
    description:'',
    released: '',
    rating: 0,
    genres: [],
    platforms: []
  });

  const handleInputChange = (ev) => {
    setGame({
      ...game,
      [ev.target.name]: ev.target.value
    })
  };

  const handleGenresChange = (ev) => {
    if(game.genres.includes(ev.target.value)) {
      game.genres = game.genres.filter((e) => e !== ev.target.value);
    } else {
      setGame({
        ...game,
        [ev.target.name]: [...game.genres, (ev.target.value)]
      });
    }
    console.log(game.genres);
  };

  const handlePlatformsChannge = (ev) => {
    if(game.platforms.includes(ev.target.value)) {
      game.platforms = game.platforms.filter((e) => e !== ev.target.value);
    } else {
      setGame({
        ...game,
        [ev.target.name]: [...game.platforms, (ev.target.value)]
      });
    }
    console.log(game.platforms)
  };  

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(PostVideogame(game))
  };

  return (
    <form name='form' onSubmit={(ev) => {handleSubmit(ev)}}>
      <div>
        <label>
          Name:
          <input 
          type='text' 
          placeholder='name' 
          name='name' 
          value={game.name} 
          onChange={(ev) => {handleInputChange(ev)}} />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input 
          type='file' 
          name='background_image' 
          value={game.background_image} 
          onChange={(ev) => {handleInputChange(ev)}} />
        </label>
      </div>
      <div>
        <label>
          Description: 
          <input 
          type='text' 
          placeholder='description' 
          name='description' 
          value={game.description} 
          onChange={(ev) => {handleInputChange(ev)}} />
        </label>
      </div>
      <div>
        <label>
          Released:
          <input 
          type='date' 
          name='released' 
          value={game.released} 
          onChange={(ev) => {handleInputChange(ev)}} />
        </label>
      </div>
      <div>
        <label>
          Rating:
          <input 
          type='number' 
          name='rating' 
          value={game.rating} 
          step='0.1'
          min='0'
          max='5'
          onChange={(ev) => {handleInputChange(ev)}} />
        </label>
      </div>
      <div>
        <label>
          Select genres:
          <input 
          type='text' 
          placeholder='genres' 
          name='genres' 
          value={game.genres} 
          readOnly />
          <select 
          multiple 
          name='genres' 
          value={game.genres} 
          onChange={(ev) => {handleGenresChange(ev)}} >
            {genres?.map((e) => {
              return (
                <option
                key={e.id}
                >{e.name}</option>
              )
            })}
          </select>
        </label>          
      </div>
      <div>
        <label>
          Select platforms:
          <input 
          type='text' 
          placeholder='platforms' 
          value={game.platforms}
          readOnly />
          <select 
          multiple 
          name='platforms' 
          value={game.platforms} 
          onChange={(ev) => {handlePlatformsChannge(ev)}} >
          {platforms?.map((e) => {
              return (
                <option
                key={e.id}
                >{e.name}</option>
              )
            })}
          </select>
        </label>
      </div>
      <div>
        <button type='submit'>Create</button>
      </div>
    </form>
  );
};

export default CreateVideogame