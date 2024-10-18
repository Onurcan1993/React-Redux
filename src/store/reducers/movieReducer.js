import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import {nanoid} from "nanoid";
import movies from '../../data.js';

const initialState = {
  movies,
  appTitle: 'IMDB Movie Database',
};

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      return {
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
     
    case ADD_MOVIE:
        return {
          ...state,movies:[...movies,{...action.payload,id:state.movies.length}]
        };
      
      
    default:
      return state;
  }
};




export default reducer;
