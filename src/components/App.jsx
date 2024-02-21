import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);

export const App = () => {
  return (
    <>
      <header className="shared-header">
        <NavLink to="/" className="active-link">
          Home
        </NavLink>
        <NavLink to="/movies" className="active-link">
          Movies
        </NavLink>
      </header>
      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MoviesDetails />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
