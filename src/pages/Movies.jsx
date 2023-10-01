import { fetchSearchMovies, onError } from 'API/API';
import MoviesList from 'components/FimlList/FimlList';
import Loader from 'components/Loader/Loader';
import Search from 'components/Search/Search';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const endPoint = '/search/movie';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) return;
    setLoading(true);
    fetchSearchMovies(endPoint, searchQuery)
      .then(data => {
        setFilms(data.results);
      })
      .catch(onError)
      .finally(() => setLoading(false));
  }, [searchQuery]);
  const onSubmitSearch = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchValue = form.search.value
      .trim()
      .toLowerCase()
      .split(' ')
      .join('+');

    if (searchValue === '') {
      alert('write your request');
      setSearchParams({});
      setFilms([]);
      return;
    }
    if (searchValue === searchQuery) {
      alert('New request');
      return;
    }

    setSearchParams({ query: searchValue });
    setFilms([]);
  };

  return (
    <div>
      <Search onSubmitSearch={onSubmitSearch} value={searchQuery} />
      <section>
        {loading && <Loader />}
        <MoviesList films={films} />
      </section>
    </div>
  );
};
export default Movies;
