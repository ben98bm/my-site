import React from "react";

import { NavLink } from "react-router-dom";
// import { UserContext } from "../../context/UserContext";

function NavBar() {
//   const { user, logout, isLogged } = useContext(UserContext);

  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark py-4 shadow  ">
      <div className="container-fluid">
        <h1 class="navbar-brand font-weight-bold lead" href="/">
          Sastrans
        </h1>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
            <ul class="navbar-nav  ml-auto d-flex align-items-center">
              <h6 className="nav-item ">
                <NavLink className="nav-link" to="/">
                  Accueil<span class="sr-only">(current)</span>
                </NavLink>
              </h6>
              <h6 className="nav-item">
                <NavLink className="nav-link" to="/about">
                  A Propos
                </NavLink>
              </h6>
              <h6 className="nav-item">
                <NavLink className="nav-link" to="/Service">
                  Service
                </NavLink>
              </h6>
              <h6 className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contacts
                </NavLink>
              </h6>

              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <button className="btn btn-success  "> Connexion</button>
                </NavLink>
              </li> */}
            </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
