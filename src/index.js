import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './common/store';
import thunk from 'redux-thunk';
import App from './core/App';
import Characters from './core/Characters';
import Locations from './core/Locations';
import Episodes from './core/Episodes';

const browserHistory = createBrowserHistory();
const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/characters" component={Characters} />
      <Route path="/locations" component={Locations} />
      <Route path="/episodes" component={Episodes} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
