import { lazy } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);

export const App = () => {
  return (
    <>
      <header>
        <NavLink to="/" className="active-link">
          Home
        </NavLink>
        <NavLink to="/movies" className="active-link">
          Movies
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<MoviesDetails />}></Route>
        </Route>
      </Routes>
    </>
  );
};
