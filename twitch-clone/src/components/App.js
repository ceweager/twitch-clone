import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new"
        </div>
      </BrowserRouter>
    </div>
      );
}

      export default App;
