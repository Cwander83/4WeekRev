import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter'

// styles
import 'normalize.css';
import './sass/main.scss';

//import App from './App';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
