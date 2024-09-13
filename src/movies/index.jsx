import { applyMiddleware, createStore } from 'redux';
import {logger} from'redux-logger';
import {thunk} from 'redux-thunk';

const initialState = {
    movieName: "Man",
    movie: [],
    page: 1,
    totalPage: 0,
    singleMovie: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_MOVIES":
      return{...state, movie: action.payload};
    case "GET_ONE_MOVIE":
      return{...state, singleMovie: action.payload};
    case "GET_ALL_PAGES":
      return{...state, totalPage: action.payload}
    case "MOVE_PAGE":
      return {...state, page: action.payload};
    case "SEARCH_MOVIE":
      return {...state, movieName: action.payload};
    default:
      return state;
  }
};

const movies = createStore(reducer, applyMiddleware(thunk, logger));

export default movies;