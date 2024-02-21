import css from './MoviesDetails.module.css';
import { fetchMovieById } from 'components/fetchMovies';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

const MoviesDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovieData(data);
        console.log(data);
        await console.log(movieData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    //eslint-disable-next-line
  }, [movieId]);
  console.log(location.state);
  return (
    <>
      <div className={css.details_div}>
        <Link to={location.state.from}>
          <button>Back </button>
        </Link>
      </div>
    </>
  );
};

export default MoviesDetails;
