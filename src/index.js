import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
// import { StateProvider } from "./data/stateprovide.js"
// import reducer,{initialState} from "./data/reducer.js"


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

/*<StateProvider initialState={initialState} reducer={reducer}>
  <App />
  </StateProvider>*/
