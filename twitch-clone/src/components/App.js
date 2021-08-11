import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import StreamCreate from './streams/stream_create';
import StreamDelete from './streams/stream_delete';
import StreamEdit from './streams/stream_edit';
import StreamShow from './streams/stream_show';
import StreamList from './streams/stream_list';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
