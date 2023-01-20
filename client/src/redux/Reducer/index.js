import { 
     GET_ALL_VIDEOGAMES,
     GAME_DETAIL,
     GET_ALL_GENRES,
     GET_ALL_PLATFORMS,
     POST_VIDEOGAME,
     SEARCH_VIDEOGAME,
     FILTER_BY_GENRE,
     FILTER_BY_PLATFORM,
     ORDER_BY_NAME,
     ORDER_BY_RATING,
     CLEAR_VIDEOGAMES,
} from "../Actions";

const initialState = {
    allVideogames: [],
    games: [],
    gameDetail: {}, 
    genres: [],
    platforms: [],
    postVideogame: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_VIDEOGAMES:
        return {
            ...state,
            allVideogames: action.payload
        }
        case GET_ALL_VIDEOGAMES: 
            return {
                ...state,
                allVideogames: action.payload,
                games: action.payload
            }
        case GAME_DETAIL:
            return {
                ...state,
                gameDetail: action.payload
            }
        case GET_ALL_GENRES:
            return {
                ...state, 
                genres: action.payload
            }
        case GET_ALL_PLATFORMS:
            return {
                ...state, 
                platforms: action.payload
            }
        case POST_VIDEOGAME:
            return {
                ...state, 
                postVideogame: action.payload
            }
        case SEARCH_VIDEOGAME:
            return {
                ...state,
                allVideogames: !action.payload.length? [] : action.payload
            }
        case FILTER_BY_GENRE:
            const games = state.games;
            const filteredByGenre = action.payload === 'All'? games : games.filter((e) => e.Genres.includes(action.payload))
            return {
                ...state,
                allVideogames: filteredByGenre
            }
        case FILTER_BY_PLATFORM:
            const Games = state.games;
            const filteredByPlatform = action.payload === 'All'? Games : Games.filter((e) => e.Platforms.includes(action.payload))
            return {
                ...state,
                allVideogames: filteredByPlatform
            }
        case ORDER_BY_NAME:
            let orderName = action.payload === 'A-Z'? state.games.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            }) : state.games.sort((a, b) => {
                if (a.name > b.name) {
                    return -1;
                }
                if (a.name < b.name) {
                    return 1;
                }
                return 0;
            });
              return {
                ...state,
                allVideogames: orderName
            }
        case ORDER_BY_RATING:
            let orderRating = action.payload === '1-5'? state.games.sort((a, b) => a - b) : state.games.sort((a, b) => b - a);
            return {
                ...state,
                allVideogames: orderRating
            }
            default:
                return state;
        }
    };


export default rootReducer;