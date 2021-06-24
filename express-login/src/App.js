import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from '../src/views/Signup';
import Login from '../src/views/Login';
import Admin from '../src/views/Admin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-light bg-dark">
          <div className="container mx-2">
            <div className="row ">
              <div className="col">
                <div className="p-3 ">
                <Link to="/signup">SignUp</Link>
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                <Link to="/login">Login</Link>
                </div>
              </div>
              <div className="col">
                <div className="p-3 ">
                <Link to="/admin">Admin</Link>
                </div>
              </div>
              <div className="col">
                <div className="p-3">
                <Link to="/login">Logout</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          {/* <Route path="/signup" component={Signup} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
