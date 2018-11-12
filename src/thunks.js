import axios from 'axios';
import { setMovies, setGenres, addLog } from './actions';
import { endpoints } from '../config';

const getMovies = (id = null) => (dispatch) => {
  // thunk - dispatch actions when needed
    if(id === null){
        axios
            .get(endpoints.mostPopularMovies())
            .then((res) => {
                dispatch(setMovies(res.data.results))
            })
            .catch((error) => console.log(error));
    }
    else{
        axios
            .get(endpoints.genreMovies(id))
            .then((res) => {
                dispatch(setMovies(res.data.results));
            })
            .catch((error) => console.log(error));
    }
};

const addLogEntry = (text) => (dispatch) => {
    const dateTime = getDatetime();
    dispatch(addLog(dateTime, text));
}

const getGenres = () => (dispatch) => {
    axios.get(endpoints.genres())
        .then(res => {
            dispatch(setGenres(res.data.genres))
        })
        .catch(error => console.log(error));
};

const getDatetime = () => {
    const date = new Date();
    const dateTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return dateTime;
};

export {getMovies, getGenres, addLogEntry};
