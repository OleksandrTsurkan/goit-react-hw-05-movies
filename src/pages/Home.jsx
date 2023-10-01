import { fetchMovies, onError } from 'API/API';
import MoviesList from 'components/FimlList/FimlList';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { HomeMainText, HomeSection } from './Home.styled';
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
      <HomeSection>
        <HomeMainText>Popular movies</HomeMainText>
        {loading && <Loader />}
        <MoviesList films={films} />
      </HomeSection>
    );
};
export default Home;