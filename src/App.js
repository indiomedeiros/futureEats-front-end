import React from "react";
import Router from "./Router/Router";
import {GlobalState} from './Global/GlobalState';


function App() {
  return (
    <div>

    <GlobalState>
      <Router /> 
    </GlobalState>
   
    </div>
  );
}

export default App;