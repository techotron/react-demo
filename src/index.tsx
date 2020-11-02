import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <Navigation />
        <Router />
    </React.StrictMode>,
    document.getElementById('root')
);
