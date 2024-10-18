import { combineReducers } from 'redux';

import  { reducer } from './movieReducer';
import { favoriteReducer } from './favoriteReducer';

const Reducers = combineReducers({
    reducer,
    favoriteReducer
})


export default Reducers;
