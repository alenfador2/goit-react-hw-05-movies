import css from './TrendingToday.module.css';
import Loader from 'components/Loader/Loader';
import { fetchTrendingMovies } from 'components/fetchMovies';
import { useState, useEffect, useCallback } from 'react';
import { useLoaderHook } from '../IsLoadingHook/LoaderHook';

const TrendingToday = () => {
  const { open, close, isLoading } = useLoaderHook(false);
  const [movies, setMovies] = useState([]);

  const fetchData = useCallback(async () => {
    open();
    try {
      const fetchedMovies = await fetchTrendingMovies();
      setMovies([...fetchedMovies]);
    } catch (error) {
      console.log('Error here: ', error);
    } finally {
      setTimeout(() => {
        close();
      }, 2000);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h1 className={css.head_title}>Trending Today</h1>
      {isLoading ? (
        <Loader isLoading={isLoading}></Loader>
      ) : (
        <ul className={css.trending_list}>
          {movies.map(movie => {
            return (
              <li className={css.movie} key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className={css.movie_image}
                  alt={movie.title}
                ></img>
                <a href={movie.id} className={css.movie_link}>
                  <h2 className={css.movie_title}>{movie.original_title}</h2>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TrendingToday;
