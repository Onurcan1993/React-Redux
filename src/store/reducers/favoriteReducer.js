import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";



const initialState = {
    favorites:[],
    isShow : true, 
}

export const favoriteReducer = (state=initialState,action)=>{
  switch (action.type) {
    case ADD_FAVORITE:
      const isAlreadyFavorite = state.favorites.some(item => item.id === action.payload.id);
      if(!isAlreadyFavorite){
              return{
        favorites:[...state.favorites,  action.payload]
      };
      }
      return state;
    case REMOVE_FAVORITE:
        return{
            favorites:state.favorites.filter((item)=>item.id!==action.payload)
        };

    case TOGGLE_FAVORITES:
      return{
        ...state,isShow:action.payload
      }

    default:
      return state;
  }
}