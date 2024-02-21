import { getReviews } from 'components/fetchMovies';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLoaderHook } from '../IsLoadingHook/LoaderHook';
import Loader from '../Loader/Loader';
import css from './Reviews.module.css';
import { Notify } from 'notiflix';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const { open, close, isLoading } = useLoaderHook(false);
  useEffect(() => {
    const fetchData = async () => {
      open();
      try {
        const reviews = await getReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        Notify.failure('Something went wrong...');
        console.log(error);
      } finally {
        close();
      }
    };
    fetchData();
    //eslint-disable-next-line
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.reviews_div}>
          {reviews.map(review => {
            return (
              <div key={review.id} className={css.review}>
                <h3 className={css.username}>{review.author} write:</h3>
                <p className={css.user_comment}>{review.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Reviews;
