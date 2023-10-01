import { fetchMovieReviews, onError } from 'API/API';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      <h3>Reviews:</h3>
      {loading && <Loader />}
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <b>Author:</b> {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p> Something wrong</p>
      )}
    </>
  );
};
export default Reviews;
