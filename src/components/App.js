import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import { getMovies } from '../thunks';
import { addHearted, removeHearted} from "../actions";

class App extends React.Component {
  constructor(props) {
    super(props);

    props.onGetMovies();
  }

  addHeart = (id) => {
    const { onHearted } = this.props;

    onHearted(id);
  };

  removeHeart = (id) => {
    const { onRemoveHearted } = this.props;

    onRemoveHearted(id);
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
              onAddHeart={() => this.addHeart(movie.id)}
              onRemoveHeart={() => this.removeHeart(movie.id)}
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
    };
  },
)(App);
