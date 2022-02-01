import React from "react";
import { Route, Switch } from 'react-router-dom';

import acceuil from '../pages/acceuil';
import about from '../pages/about';
import contact from '../pages/contact';

const PublicRoutes = () => (
    <>
      <Switch>
        <Route exact path="/acceuil" component={acceuil} />
        <Route path="/about" component={about} />
        <Route path="/contact" component={contact} />
      </Switch>
    </>
  );
  
  export default PublicRoutes;
  