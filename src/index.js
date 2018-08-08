import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { saving } from "./saving";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  saving,
  //使用chrome redux插件
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
