import { fetchMovieReviews, onError } from 'API/API';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsLi, ReviewsMainText, ReviewsUl } from './Reviews.styles';

const endPoint = '/movie';

const Reviews = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMovieReviews(endPoint, movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(onError)
      .finally(() => setLoading(false));
  }, [movieId]);
  return (
    <>
      <ReviewsMainText>Reviews:</ReviewsMainText>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <ReviewsUl>
          {reviews.map(({ id, author, content }) => (
            <ReviewsLi key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p>{content}</p>
            </ReviewsLi>
          ))}
        </ReviewsUl>
      ) : (
        <p> Something wrong</p>
      )}
    </>
  );
};
export default Reviews;
