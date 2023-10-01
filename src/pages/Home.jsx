import { fetchMovies, onError } from 'API/API';
import MoviesList from 'components/FimlList/FimlList';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
const endPoint = '/trending/movie/day';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (films.length > 0) {
      return;
    }
    fetchMovies(endPoint)
      .then(data => {
        setFilms(data.results);
      })
      .catch(onError)
      .finally(() => setLoading(false));
  }, [films]);
    
    return (
      <section>
        <h2>Popular movies</h2>
        {loading && <Loader />}
        <MoviesList films={films} />
      </section>
    );
};
export default Home;