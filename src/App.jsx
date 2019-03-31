import React, { memo } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

import './assets/css/app.css';

const Routing = () => (
  <HashRouter>
    <Switch>
      {routes.map(({ path, component }, key) => (
        <Route key={key}
               path={path}
               component={component}
        />
      ))}
    </Switch>
  </HashRouter>
);

const App = () => (
  <div className="App">
    <Routing />
  </div>
);

export default memo(App);
