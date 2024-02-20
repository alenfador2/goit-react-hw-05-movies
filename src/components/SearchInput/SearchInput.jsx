import css from './SearchInput.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
  };
  return (
    <>
      <form className={css.movie_form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={css.movie_input}
          placeholder="Enter name of movie here"
          value={query}
          onChange={handleChange}
        />
        <button className={css.search_button}>Search</button>
      </form>
    </>
  );
};

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchInput;
