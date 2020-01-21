import React from 'react';
import './app.scss';

import Header from '../../containers/Header';
import Page from '../Page/Page';

function App() {
  return (
    <div className="app">
      <Header />
      <Page />
    </div>
  );
}

export default App;
