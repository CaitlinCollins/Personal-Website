import React from "react";
import './App.scss';
import { Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Home from './components/Home/home';


function App() {
  return (
    <div>
      <Home />
      {/* <HashRouter>
        <Route exact path={["/", "/Home"]} component={Home} />
      </HashRouter> */}
    </div>
  );
}

export default App;
