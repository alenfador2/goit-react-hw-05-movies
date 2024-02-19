import css from './SearchInput.module.css';
import PropTypes from 'prop-types';

const SearchInput = handleSearch => {
  return (
    <>
      <form
        className={css.movie_form}
        onSubmit={event => {
          handleSearch(event.target.value);
        }}
      >
        <input
          type="text"
          className={css.movie_input}
          placeholder="Enter name of movie here"
        />
        <button className={css.search_button}>Search</button>
      </form>
    </>
  );
};

SearchInput.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default SearchInput;
