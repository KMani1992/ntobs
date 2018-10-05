import React from 'react';
import ReactDOM from 'react-dom';
import RootContainers from './containers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './reducers/index';
import {createBrowserHistory} from 'history'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

const store=createStore(rootReducer);
const browserHistory = createBrowserHistory();

ReactDOM.render(<RootContainers store={store} history={browserHistory}/>,
document.getElementById("root"));
