import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import AboutUs from './AboutUs';
import OurTeam from './OurTeam';
import Programs from './Programs';
import ContactUs from './ContactUs';

const App = () => (
  <Fragment>
    <Container>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />          
          <Route exact path="/home" component={ Home } />
          <Route path="/AboutUs" component={ AboutUs } />
          <Route path="/OurTeam" component={ OurTeam } />
          <Route path="/Programs" component={ Programs } />
          <Route path="/ContactUs" component= { ContactUs } />
        </Switch>
      </Router>
    </Container>  
  </Fragment>  
);

export default App;
