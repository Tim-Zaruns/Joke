import { Link, Outlet } from 'react-router-dom';
import { useGetAllJokeCategoryQuery } from '../../services/jokes';
import './jokesNav.scss';

const JokesNav = () => {
  const data = useGetAllJokeCategoryQuery(undefined);
  return (
    <>
      <div className="jokes__nav--wrapper">
        {
        data?.data?.categories.map((item) => (
          <Link to={`/jokes/${item}`} key={item} className="link">
            <div className="jokes__nav--category">
              {item}
            </div>
          </Link>
        ))
      }
      </div>
      <Outlet />
    </>
  );
};

export default JokesNav;
