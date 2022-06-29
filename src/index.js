import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Visit from './Visit';
import User from './User';
import Notfound from './Notfound';


const routing = (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/User'>User</Link></li>
        <li><Link to='/Visit'>Visit</Link></li>
      </ul>
    </div>
    {/* Switch is replaced by Routes in V6 */}
    {/* To Redirect to a "default" route if no other routes match: we use path='*'  */}
    <Routes> 
    <Route exact path='/' element={<App />} />
    <Route path='/User' element={<User />} />
    <Route path='/Visit' element={<Visit />} />
    <Route path='*'  element={<Notfound />} />
    </Routes>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
