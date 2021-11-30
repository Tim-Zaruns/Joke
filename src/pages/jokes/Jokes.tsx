import { Link, useParams } from 'react-router-dom';
import { useGetJokeCategoryQuery } from '../../services/jokes';
import './jokes.scss';

const Jokes = () => {
  const { category } = useParams<'category'>();
  const jokesData = useGetJokeCategoryQuery(category || '');
  if (jokesData.data?.error) {
    return <h2>{jokesData.data?.message}</h2>;
  }

  return (
    <div className="jokes__wrapper">
      <ol className="jokes">
        {jokesData.data?.jokes.map((joke) => (
          <Link to={`/jokes/${joke.category}/${joke.id}`} key={joke.id} className="jokes__link">
            <li className="jokes__list">
              <p>{joke.joke}</p>
            </li>
          </Link>
        ))}
      </ol>
    </div>
  );
};

export default Jokes;
