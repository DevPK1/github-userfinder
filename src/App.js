import React from 'react'
import {Dashboard,Login,PrivateRoute,AuthWrapper,Error} from './Pages'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="*">
            <Error />
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
