import React, {useEffect, useState} from 'react';
import {Switch, HashRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Config} from './pages/config';
import {RecoilRoot} from 'recoil';
import axios from "axios";

function App() {
  const [appData, setAppData] = useState({})

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get('http://127.0.0.1:3000/scada').then((response) => {
        setAppData(JSON.parse(response.data.data))
      }).catch((error) => {
        console.log(error)
      })
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  console.log(appData)

  return (
    <RecoilRoot>
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <Home data={appData}/>
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
