import css from './Cast.module.css';
import { getCredits } from '../fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cast = await getCredits(movieId);
        setCredits(cast);
      } catch (error) {
        Notify.failure('Something went wrong');
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      <ul className={css.cast_list}>
        {credits.map(actor => {
          return (
            <li className={css.actor} key={actor.credit_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.original_name}
                className={css.actor_img}
              />
              <strong className={css.actor_name}>{actor.original_name}</strong>
              <p className={css.actor_character_name}>
                Character: {actor.character}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
