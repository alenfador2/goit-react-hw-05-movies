import ClockLoader from 'react-spinners/ClockLoader';
import css from './Loader.module.css';
import PropTypes from 'prop-types';

const Loader = isLoading => {
  return (
    <>
      <div className={css.loader_div}>
        <ClockLoader
          color="#36d7b7"
          cssOverride={{}}
          loading={isLoading}
          size={200}
          speedMultiplier={1}
        />
      </div>
    </>
  );
};
Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
