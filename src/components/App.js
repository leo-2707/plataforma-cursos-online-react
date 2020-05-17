import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Routes
import Public from './routes/Public';
import Protected from './routes/Protected';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Specialities from './pages/Specialities';
import Speciality from './pages/Speciality';
import Courses from './pages/Courses';
import Course from './pages/Course';
import Teachers from './pages/Teachers';
import Fragment from './pages/Fragment';
import Page404 from './pages/Page404';

const App = () => {
  return (
    <Router>
      <Switch>
        <Public path='/login' component={Login} />
        <Public path='/register' component={Register} />

        <Protected path='/' exact component={Home} />
        <Protected path='/specialities' exact component={Specialities} />
        <Protected path='/speciality/:id' component={Speciality} />
        <Protected path='/courses' exact component={Courses} />
        <Protected path='/courses/:id' component={Course} />
        <Protected path='/teachers' exact component={Teachers} />
        <Protected path='/fragment/:id' component={Fragment} />

        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default App;
