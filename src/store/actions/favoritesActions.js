export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const toggleFavorites = (value) => {
  return { type: TOGGLE_FAVORITES, payload:value };
};

export const addFavorite = (favMovie) => {
  return { type: ADD_FAVORITE, payload: favMovie };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
