import SearchInput from 'components/SearchInput/SearchInput';
import { useState, useEffect } from 'react';
import { searchMovie } from 'components/fetchMovies';
import { useLoaderHook } from 'components/IsLoadingHook/LoaderHook';

const Movies = () => {
  const [query, setQuery] = useState('');
  const { open, close, isLoading } = useLoaderHook(false);

  const handleSearch = event => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    open();
    searchMovie();
    setTimeout(() => {
      close();
    }, 1750);
    //eslint-disable-next-line
  }, [query]);
  return (
    <>
      <SearchInput onSubmit={handleSearch}></SearchInput>
    </>
  );
};

export default Movies;
