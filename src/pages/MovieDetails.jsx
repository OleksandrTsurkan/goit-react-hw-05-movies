import { fetchMovieDetails, onError } from 'API/API';
import Loader from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const endPoint = '/movie';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');
  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMovieDetails(endPoint, movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(onError)
      .finally(() => setLoading(false));
  }, [movieId]);

  if (!movie) {
    return;
  }
  const {
    poster_path,
    title,
    original_title,
    release_date,
    genres,
    vote_average,
    overview,
  } = movie;
  return (
    <section>
      <Link to={backLinkRef.current}>{'<<< BACK'}</Link>
      <h2> Movie Details:</h2>
      {loading && <Loader />}
      {movie && (
        <>
          <div>
            <img
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w342${poster_path}`
                  : 'https://placehold.jp/16/7a7a7a/ffffff/138x255.png' +
                    '?text=' +
                    title
              }
              alt={title}
              width="200"
            />
            <div>
              <h3>{original_title}</h3>
              <p>
                <b>Release date:</b> {release_date}
              </p>
              <p>
                <b>Genres:</b>{' '}
                {genres.map(({ name }) => `${name.toLowerCase()} | `)}
              </p>
              <p>
                <b>Ranking:</b> {vote_average}
              </p>
              <p>
                <b>Overview:</b> {overview}
              </p>
            </div>
          </div>
          <h3>Additional information:</h3>
          <ul>
            <li>
              <Link to="cast">
                <button>Cast</button>
              </Link>
            </li>
            <li>
              <Link to="reviews">
                <button>Reviews</button>
              </Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </section>
  );
};

export default MovieDetails;
