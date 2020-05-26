import * as React from 'react';
import './style/App.scss';
import IndexPage from './pages/Index'

function App(): React.ReactElement {
  return (
    <div className="App">
      <IndexPage />
    </div>
  );
}

export default App;
