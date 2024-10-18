import { legacy_createStore as createStore } from "redux";
import combineReducers from "./reducers";


export const myStore = createStore(combineReducers); //redux store ile değiştirin
