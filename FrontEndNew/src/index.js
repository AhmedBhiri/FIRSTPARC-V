import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/light-bootstrap-dashboard-react.css";
import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import Theme from 'resources/theme';
import Routes from 'routes';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>

        <ThemeProvider theme={Theme}>
            <Router>
                <Routes />
            </Router>
        </ThemeProvider>,
    </Provider>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
