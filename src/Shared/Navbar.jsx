import { NavLink } from "react-router-dom";
import navLogo from "../assets/logo.png";
import Container from "../container/Container";

const Navbar = () => {
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
              <NavLink>Our Portfolio</NavLink>
            </li>
            <li className="mx-5">
              <NavLink>Our Team</NavLink>
            </li>
            <li className="mx-5">
              <NavLink>Contact Us</NavLink>
            </li>
            <button className="btn ml-5 bg-pink-600 text-white hover:text-pink-500">Login</button>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
