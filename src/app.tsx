import React from 'react';
import {Switch, HashRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Config} from './pages/config';
import {RecoilRoot} from "recoil";

function App() {

  return (
    <RecoilRoot>
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/config">
              <Config/>
            </Route>
          </Switch>
        </HashRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
