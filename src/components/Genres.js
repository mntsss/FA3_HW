import React from 'react';
import { connect } from 'react-redux';
import {addLogEntry, getGenres, getMovies} from '../thunks';

class Genres extends React.Component {
  constructor(props) {
    super(props);

    props.onGetGenres();
  }

  changeGenre = (genre) => {
      const {onGetMovies, onLogEntry} = this.props;
      onLogEntry(`Pakeistas zanras i ${genre.name}`);
      onGetMovies(genre.id);
  };

  render() {
    const { genres, onGetMovies } = this.props;

    return (
      <div className="genres">
        {genres.map((genre) => (
          <div key={genre.id} className="genre" onClick={() => this.changeGenre(genre)}>
            {genre.name}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
    (state) => {
      return {
        genres: state.genres,
      };
    },
    (dispatch) => {
      return {
        onGetGenres: () => dispatch(getGenres()),
        onGetMovies: (id) => dispatch(getMovies(id)),
        onLogEntry: (text) => dispatch(addLogEntry(text))
      }
    }

)(Genres);
