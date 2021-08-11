import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamCreate from './streams/stream_create';
import StreamDelete from './streams/stream_delete';
import StreamEdit from './streams/stream_edit';
import StreamShow from './streams/stream_show';
import StreamList from './streams/stream_list';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
