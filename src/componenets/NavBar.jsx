import { NavLink } from "react-router";

import logo from "../assets/images/logo.svg";
function NavBar() {
  const navMenus = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "" },
    { name: "Reservations", path: "/reservation" },
    { name: "Order Online", path: "" },
  ];
  const navMenuStyle = { textDecoration: "none", color: "black",  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo " />
      </div>
      <div className="nav-menus">
        <div className="nav-menu-items">
          {navMenus &&
            navMenus.map((menu, index) => {
              return (
                <NavLink
                  to={menu.path}
                  key={index}
                  className="nav-items"
                  style={navMenuStyle}
                >
                  {menu.name}
                </NavLink>
              );
            })}
        </div>
      </div>
      <div className="auth">
        <button className="login-btn">
          <NavLink style={navMenuStyle}> Login </NavLink>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
