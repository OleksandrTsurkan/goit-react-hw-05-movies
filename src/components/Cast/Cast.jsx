import { fetchMovieCast, onError } from 'API/API';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const endPoint = '/movie';

const Cast = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMovieCast(endPoint, movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(onError)
      .finally(() => setLoading(false));
  }, [movieId]);
  return (
    <>
      <h3>Cast:</h3>;{loading && <Loader />}
      {cast.length !== 0 ? (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <b>{name}</b>
              <p>Character: {character}</p>
              <img
                src={
                  profile_path
                    ? `http://image.tmdb.org/t/p/w185${profile_path}`
                    : 'https://placehold.jp/16/7a7a7a/ffffff/138x255.png' +
                      '?text= ' +
                      name
                }
                alt={name}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No information</p>
      )}
    </>
  );
};
export default Cast;
