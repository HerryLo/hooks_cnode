import * as React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './style/App.scss';
import IndexPage from './pages/Index'
import DetailPage from "./pages/Detail";

function App(): React.ReactElement {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/detail">About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/detail">
          <DetailPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
