const setMovies = (movies) => {
  // action - always return only object with data, no functionality can be done here
  return {
    type: 'SET_MOVIES',
    movies,
  };
};

const setGenres = (genres) => {
  return {
      type: 'SET_GENRES',
      genres,
  };
};

const addHearted = (id) => {
  return {
    type: 'ADD_HEARTED',
      id,
  };
};

const removeHearted = (id) => {
  return {
    type: 'REMOVE_HEARTED',
      id,
  };
};

const addLog = (time,entry) => {
  return {
    type: 'ADD_LOG',
    time, entry
  };
};

export {setMovies, setGenres, addHearted, removeHearted, addLog};