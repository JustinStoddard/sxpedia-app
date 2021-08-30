import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { PrivateRoute } from './Components/HOC/PrivateRoute';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/welcome' component={LandingPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/404' component={NotFoundPage} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
