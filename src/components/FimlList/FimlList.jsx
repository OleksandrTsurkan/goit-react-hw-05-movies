import LinesEllipsis from "react-lines-ellipsis";
import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(({ id, title, overview, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
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
            <div>
              <h3>{title}</h3>
              <LinesEllipsis
                text={overview}
                maxLine="4"
                ellipsis="..."
              ></LinesEllipsis>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
