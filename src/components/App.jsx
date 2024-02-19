import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchMovies } from './fetchMovies';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);

export const App = () => {
  fetchMovies(157336);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}>
          <Route path=":movieId" element={<MoviesDetails />}>
            Big Bob
          </Route>
        </Route>
      </Routes>
    </>
  );
};
