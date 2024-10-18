// asd
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFavorite,
  toggleFavorites,
} from "../store/actions/favoritesActions";

const FavoriteMovieList = () => {
  const favorites = useSelector((store) => store.favoriteReducer.favorites);
  const displayFavorites = useSelector((store) => store.favoriteReducer.isShow);
  const dispatch = useDispatch();

  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
      <h5 className="font-bold select-none">Favorimmm Filmler</h5>
      {displayFavorites && (
        <div className="pt-3 text-sm">
          {favorites.map((movie) => (
            <Link
              key={movie?.title}
              className="py-1 flex gap-2 justify-between"
              to={`/movies/${movie?.id}`}
              data-testid="favorite-movie"
            >
              {movie?.title}
              <span
                onClick={() => {
                  dispatch(removeFavorite(movie?.id));
                  dispatch(toggleFavorites(true));
                }}
                className="material-icons hover:text-red-600 text-[18px]"
              >
                remove_circle
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteMovieList;
