/**
 * Ref: https://www.youtube.com/watch?v=Ke90Tje7VS0
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';	// mai: added
import Conter from './components/counter';	// due to "Counter" is export as "default" so don't need to declare inside "{}" like this "{Counter}".

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Conter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
