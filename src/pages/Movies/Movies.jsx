import SearchInput from 'components/SearchInput/SearchInput';
import Loader from 'components/Loader/Loader';
import css from './Movies.module.css';
import { useState, useEffect } from 'react';
import { searchMovie } from 'components/fetchMovies';
import { useLoaderHook } from 'components/IsLoadingHook/LoaderHook';
import { startTransition } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResult] = useState([]);
  const { open, close, isLoading } = useLoaderHook(false);

  const handleSearch = event => {
    startTransition(() => {
      setQuery(event);
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        setSearchResult([]);
        return;
      }
      open();
      try {
        const results = await searchMovie(query);
        setSearchResult(results);
      } catch (error) {
        console.log('Error fetching data: ', error);
      } finally {
        close();
      }
    };
    fetchData();
    //eslint-disable-next-line
  }, [query]);

  return (
    <>
      <SearchInput onSubmit={handleSearch}></SearchInput>
      <ul className={css.search_list}>
        {searchResults.map(item => {
          return (
            <Link to={`/movies/${item.id}`} key={item.id} className={css.link}>
              <li key={item.id}>
                <h3>{item.title}</h3>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
