import Axios from 'axios';

export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';
export const GET_ALL_VIDEOGAMES_ERROR = 'GET_ALL_VIDEOGAMES_ERROR'
export const GAME_DETAIL = 'GAME_DETAIL';
export const GET_ALL_GENRES = 'GET_ALL_GENRES';
export const GET_ALL_PLATFORMS = 'GET_ALL_PLATFORMS';
export const POST_VIDEOGAME = 'POST_VIDEOGAME';
export const SEARCH_VIDEOGAME = 'SEARCH_VIDEOGAME';
export const SEARCH_VIDEOGAME_ERROR = 'SEARCH_VIDEOGAME_ERROR';
export const CLEAR_VIDEOGAMES = 'CLEAR_VIDEOGAMES';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_PLATFORM = 'FILTER_BY_PLATFORM';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_RATING = 'ORDER_BY_RATING';
export const CLEAR_GAME_DETAIL = 'CLEAR_GAME_DETAIL';

export const getAllVideogames = () => {
    return async(dispatch) => {
        return await Axios.get('/videogames')
        .then(res => {dispatch({type: GET_ALL_VIDEOGAMES, payload: res.data})})
        .catch(error => {dispatch({type: GET_ALL_VIDEOGAMES_ERROR, payload: error})});
    };
};

export const getDetail = (id) => {
    return async(dispatch) => {
        return await Axios.get(`/videogame/${id}`)
        .then(res => {dispatch({type: GAME_DETAIL, payload: res.data})})
        .catch(error => error);
    };    
};

export const getAllGenres = () => {
    return async(dispatch) => {
        return await Axios.get('/genres')
        .then(res => {dispatch({type: GET_ALL_GENRES, payload: res.data})})
        .catch(error => error);
    };
};

export const getAllPlatforms = () => {
    return async(dispatch) => {
        return await Axios.get('/platforms')
        .then(res => {dispatch({type: GET_ALL_PLATFORMS, payload: res.data})})
        .catch(error => error);
    };
};

export const PostVideogame = (game) => {
    return async(dispatch) => {
        return await Axios.post('/videogames', game)
        .then(res => {dispatch({type: POST_VIDEOGAME, payload: res.data})})
        .catch(error => console.log(error));
    };
};

export const searchVideogame = (name) => {
    return async(dispatch) => {
        return await Axios.get(`/videogames?name=${name}`)
        .then(res => {dispatch({type: SEARCH_VIDEOGAME, payload: res.data}, console.log(res.data))})
        .catch(error => {dispatch({type: SEARCH_VIDEOGAME_ERROR, payload: {error: error.response.data}}, console.log(error.response.data))});
    };
};

export const filterByGenre = (genre) => {
    return {
        type: FILTER_BY_GENRE,
        payload: genre
    };
};

export const filterByPLatform = (platform) => {
    return {
        type: FILTER_BY_PLATFORM,
        payload: platform
    };
};

export const OrderByName = (order) => {
    return {
        type: ORDER_BY_NAME,
        payload: order
    };
};

export const OrderByRating = (order) => {
    return {
        type: ORDER_BY_RATING,
        payload: order
    };
};

export const clearVideogames = () => {
    return {
        type: CLEAR_VIDEOGAMES,
        payload: []
    };
};

export const clearGameDetail = () => {
    return {
        type: CLEAR_GAME_DETAIL,
        payload: {}
    };
};