import * as React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './style/App.scss';
import IndexPage from './pages/Index'
import DetailPage from "./pages/Detail";

function App(): React.ReactElement {
  return (
    <div className="App">
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
