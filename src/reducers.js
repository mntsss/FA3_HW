import { combineReducers } from 'redux';

// initial state for when state isn't present to have a fallback solution
const initialState = [];

const moviesReducer = (state = initialState, action) => {
  // reducer - always return NEW state, no functionality can be done here
  switch (action.type) {
      case 'SET_MOVIES':
      return [...action.movies ];

    default:
      return state;
  }
};

const genresReducer = (state = initialState, action) => {
  switch (action.type)
  {
      case 'SET_GENRES':
        return [...action.genres ];

      default:
        return state;
  }
};

const heartedReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_HEARTED':
        return [ ...state, action.id];
      case 'REMOVE_HEARTED':
        return state.filter((currentId) => currentId !== action.id);
      default:
        return state;
  }
};

const logsReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_LOG':
        const logsTemp = state;
        logsTemp[action.time] = action.entry;
        return [...logsTemp];
      default:
        return state;
  }
};

// rootReducer - connect multiple reducers here
export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  hearted: heartedReducer,
  logs: logsReducer
});
