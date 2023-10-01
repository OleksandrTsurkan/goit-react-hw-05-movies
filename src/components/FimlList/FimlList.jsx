import LinesEllipsis from 'react-lines-ellipsis';
import { Link, useLocation } from 'react-router-dom';
import {
  MoviesDiv,
  MoviesHeader,
  MoviesImg,
  MoviesLi,
  MoviesUl,
} from './FilmList.styled';

import css from './FilmList.module.css'

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <MoviesUl>
      {films.map(({ id, title, overview, poster_path }) => (
        <MoviesLi key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MoviesImg
              src={
                poster_path
                  ? `http://image.tmdb.org/t/p/w154${poster_path}`
                  : 'https://placehold.jp/16/7a7a7a/ffffff/138x255.png' +
                    '?text=' +
                    title
              }
              alt={title}
              width="154"
              height="231"
            />
            <MoviesDiv>
              <MoviesHeader>{title}</MoviesHeader>
              <LinesEllipsis
                text={overview}
                maxLine="3"
                ellipsis="..."
                className={css.MoviesListTextDesc}
              ></LinesEllipsis>
            </MoviesDiv>
          </Link>
        </MoviesLi>
      ))}
    </MoviesUl>
  );
};

export default MoviesList;
