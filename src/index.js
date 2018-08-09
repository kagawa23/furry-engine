import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { saving } from "./saving";
import { createStore, applyMiddleware, compose } from "redux";
// import { Provider } from "react-redux";
import { Provider } from "./my-react-redux";

import thunk from "redux-thunk";

const store = createStore(
  saving,
  compose(
    applyMiddleware(thunk),
    //使用chrome redux插件
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
