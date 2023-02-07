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
     SEARCH_VIDEOGAME_ERROR,
     CLEAR_GAME_DETAIL,
} from "../Actions";

const initialState = {
    allVideogamesName: [],
    allVideogames: [],
    games: [],
    gameDetail: {}, 
    genres: [],
    platforms: [],
    postVideogame: {},
    error: null,
};

console.log(initialState.error)

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_VIDEOGAME_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        case CLEAR_GAME_DETAIL:
            return {
                ...state,
                gameDetail: action.payload
            }
        case CLEAR_VIDEOGAMES:
        return {
            ...state,
            allVideogames: action.payload
        }
        case GET_ALL_VIDEOGAMES: 
            return {
                ...state,
                allVideogamesName: action.payload?.map((e) => e.name),
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
                postVideogame: action.payload,
                allVideogamesName: state.allVideogamesName.push(state.postVideogame?.name)
            }
        case SEARCH_VIDEOGAME:
            return {
                ...state,
                allVideogames: !action.payload.length? [] : action.payload,
                games: action.payload
            }
        case FILTER_BY_GENRE:
            const games = state.games;
            const filteredByGenre = action.payload === 'All'? games : games.filter((e) => e.Genres.includes(action.payload))
            return {
                ...state,
                allVideogames: filteredByGenre,
                error: !filteredByGenre? 'videogame not found' : state.error = null
            }
        case FILTER_BY_PLATFORM:
            const Games = state.games;
            const filteredByPlatform = action.payload === 'All'? Games : Games.filter((e) => e.Platforms.includes(action.payload))
            return {
                ...state,
                allVideogames: filteredByPlatform,
                error: !filteredByPlatform.length? 'videogame not found' : state.error = null
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