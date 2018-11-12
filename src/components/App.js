import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { getMovies, addLogEntry } from '../thunks';
import { addHearted, removeHearted} from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);

    props.onLogEntry(`Aplikacija uzkrauta`);
    props.onGetMovies();
  }

  addHeart = (movie) => {
    const { onHearted, onLogEntry } = this.props;
    onLogEntry(`Uzdeta sirdele filmui ${movie.title}`);
    onHearted(movie.id);
  };

  removeHeart = (movie) => {
    const { onRemoveHearted, onLogEntry } = this.props;
    onLogEntry(`Nuimta sirdele filmui ${movie.title}`);
    onRemoveHearted(movie.id);
  };

  render() {
    const { movieList } = this.props;
    const { hearted } = this.props;

    return (
      <React.Fragment>
        <Genres onChangeList={this.setMovieList} />

        <div className="cards">
          {movieList.map((movie) => (
            <Card
              key={movie.id}
              isHearted={hearted.includes(movie.id)}
              onAddHeart={() => this.addHeart(movie)}
              onRemoveHeart={() => this.removeHeart(movie)}
              movie={movie}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  // function to get data from redux store to this components props
  (state) => {
    return {
      movieList: state.movies,
      hearted: state.hearted
    };
  },
  // function to pass action callers to this components props
  (dispatch) => {
    return {
      onGetMovies: () => dispatch(getMovies()),
      onHearted: (id) => dispatch(addHearted(id)),
      onRemoveHearted: (id) => dispatch(removeHearted(id)),
      onLogEntry: (text) => dispatch(addLogEntry(text)),
    };
  },
)(App);
