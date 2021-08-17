import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import StreamCreate from './streams/stream_create';
import StreamDelete from './streams/stream_delete';
import StreamEdit from './streams/stream_edit';
import StreamShow from './streams/stream_show';
import StreamList from './streams/stream_list';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
