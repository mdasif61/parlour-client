import { Link, NavLink } from "react-router-dom";
import navLogo from "../assets/logo.png";
import Container from "../container/Container";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <img className="w-36" src={navLogo} alt="" />
          </div>
          <ul className="flex items-center">
            <li className="mx-5">
              <NavLink>Home</NavLink>
            </li>
            <li className="mx-5">
              <NavLink to="/dashboard/book">Dashboard</NavLink>
            </li>
            <li className="mx-5">
              <NavLink>Our Team</NavLink>
            </li>
            <li className="mx-5">
              <NavLink>Contact Us</NavLink>
            </li>
            <li className="mx-5">
              <NavLink>{user?.displayName}</NavLink>
            </li>
            <li>
              {user ? (
                <>
                  <button
                    onClick={handleLogOut}
                    className="btn ml-5 bg-pink-600 text-white hover:text-pink-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="btn ml-5 bg-pink-600 text-white hover:text-pink-500">
                      Login
                    </button>
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
