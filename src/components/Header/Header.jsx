import { NavLink } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';

import css from './Header.module.css';

const Header = () => {
  const handleClick = event => {
    event.target.blur();
  };

  let activeClassName = {
    color: 'red',
  };

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={css.navlink}
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
          onClick={handleClick}
        >
          <FaHome />
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={css.navlink}
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <MdLocalMovies />
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
