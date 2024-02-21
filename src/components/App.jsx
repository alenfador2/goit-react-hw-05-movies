import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Loader from './Loader/Loader';
import NotFound from '../pages/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast></Cast>}></Route>
            <Route path="reviews" element={<Reviews></Reviews>}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
