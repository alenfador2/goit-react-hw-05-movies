import SearchInput from 'components/SearchInput/SearchInput';
import Loader from 'components/Loader/Loader';
import css from './Movies.module.css';
import { useState, useEffect } from 'react';
import { searchMovie } from 'components/fetchMovies';
import { useLoaderHook } from 'components/IsLoadingHook/LoaderHook';
import { startTransition } from 'react';

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
            <li key={item.id}>
              <h3>
                <a href={item.id} className={css.movies_link}>
                  {item.title}
                </a>
              </h3>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
