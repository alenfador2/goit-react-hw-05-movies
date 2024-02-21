import css from './MoviesDetails.module.css';
import { fetchMovieById } from 'components/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useLoaderHook } from 'components/IsLoadingHook/LoaderHook';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';

const MoviesDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();
  const { open, close, isLoading } = useLoaderHook(false);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    open();
    const fetchData = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovieData(data);
      } catch (error) {
        Notify.failure('Failed fetch data');
        console.log(error);
      } finally {
        close();
      }
    };
    fetchData();
    //eslint-disable-next-line
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.details_div}>
          <Link to={location.state?.from ?? '/'}>
            <button className={css.button}>Back</button>
          </Link>
          <div className={css.information}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                alt={movieData.title}
                className={css.image}
              />
            </div>
            <div className={css.info_div}>
              <div>
                <h2>{movieData.title}</h2>
                {movieData.release_date && (
                  <h2>({movieData.release_date.slice(0, 4)})</h2>
                )}
                <p>User score: {movieData.vote_average}</p>
              </div>
              <div>
                <h3>Overview</h3>
                <p>{movieData.overview}</p>
                <h3>Genres</h3>
                {
                  <p>
                    {movieData.genres &&
                      movieData.genres.map(genre => `${genre.name} | `)}
                  </p>
                }
              </div>
              <div className={css.movie_extra_info}>
                <h3>Additional information:</h3>
                <div className={css.extra_info}>
                  <Link to={'cast'}>
                    <strong>Cast</strong>
                  </Link>
                  <Link to={'reviews'}>
                    <strong>Reviews</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={css.outlet_div}>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesDetails;
