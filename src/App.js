import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import routes from './routes';
import Wrapper from './components/Wrapper';
import Main from './components/Main';
import SiteHeader from './components/SiteHeader/index';

const App = () => {
  return (
      <Wrapper>
        <SiteHeader/>
        <Main>
          <Switch>
            {routes.map((route, idx) => <Route key={idx} {...route} />)}
            <Route exact path='/' render={() => (
              <Redirect to='/home'/>
            )}/>
          </Switch>
        </Main>
      </Wrapper>
  );
};

export default App;
