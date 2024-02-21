import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <div className={css.not_found}>
        <img
          src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"
          alt="Page not found"
          className={css.not_found_image}
        />
      </div>
    </>
  );
};

export default NotFound;
