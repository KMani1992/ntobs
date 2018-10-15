import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import RootContainers from "./containers/index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import { createBrowserHistory } from "history";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootWatchers from "./sagas/index";
import Common from './reducers/CommonState';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = composeWithDevTools({});

const store = createStore(
  rootReducer,
  {
    common: Common
  },
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatchers);

const browserHistory = createBrowserHistory();

ReactDOM.render(
  <RootContainers store={store} history={browserHistory} />,
  document.getElementById("root")
);
