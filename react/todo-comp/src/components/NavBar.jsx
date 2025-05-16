import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        App1
      </NavLink>
      <NavLink to="/App2">
       App2
      </NavLink>
      <NavLink to="/App3">
       App3</NavLink>
    </nav>
  );
}

export default NavBar