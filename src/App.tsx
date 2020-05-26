import * as React from 'react';
import './style/App.scss';
import HomePage from './pages/Home'

function App(): React.ReactElement {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
