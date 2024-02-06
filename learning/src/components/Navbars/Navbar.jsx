import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <Link to="/">AdnanTechnical</Link>
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
                <Link to="/service"> Services </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
              <li>
                <Link to="/register"> Register </Link>
              </li>
              <li>
                <Link to="/login"> Login </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
