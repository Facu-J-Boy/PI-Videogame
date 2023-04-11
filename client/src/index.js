import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/Store/index.js';
import axios from 'axios';

/////AXIOS DB LOCAL/////
// axios.defaults.baseURL = "http://localhost:3001";

////AXIOS DB RAILWAY////
axios.defaults.url = "https://pi-videogame-production-84df.up.railway.app"

ReactDOM.render(
    <Provider store={store}>
     <Router>
       <App />
     </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
