import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// import PrivateRoutes from "./PrivateRoutes";
// import AuthenticatedRoute from "./AuthenticatedRoute";

// import Login from "../page/LoginForm";

import Accueil from "./pages/acceuil";
import NavBar from "./navbar/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";
import footer from "./footer/footer";
const AppRouter = () => {
  return (
      <>
        <Router>
              <NavBar />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => <Accueil {...props} />}
                />
                {/* <Route path="/login" render={(props) => <Login {...props} />} /> */}

                <Route
                  path="/about"
                  exact
                  render={(props) => <About {...props} />}
                />

                <Route
                  path="/Service"
                  exact
                  render={(props) => <Service {...props} />}
                />

                <Route
                  path="/contact"
                  exact
                  render={(props) => <Contact {...props} />}
                />

                {/* <AuthenticatedRoute
                  path="/"
                  render={(props) => <PrivateRoutes {...props} />}
                /> */}

                {/* <Route path="/" component={PrivateRoutes} /> */}

              </Switch>
              <footer />
        </Router>
      </>
    
  );
};

export default AppRouter;
