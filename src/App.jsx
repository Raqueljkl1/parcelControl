import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <Router>
        <Link to='/'>Home</Link>
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </Router>
  );
}

export default App;