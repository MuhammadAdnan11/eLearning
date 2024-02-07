import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <Link to="/">
              <i class="fa-solid fa-book"></i>eLearning
            </Link>
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/courses"> Courses </Link>
              </li>
              <li>
                <Link to="/pages"> Pages </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
              <li>
                <button>Join Noq</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
