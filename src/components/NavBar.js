import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="navbar__menu">
          <li className="navbar__menu__home">
            <Link className="navbar__menu__home__link" to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
