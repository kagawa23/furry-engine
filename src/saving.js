// import { createStore } from "redux";
import { createStore } from "./my-redux";

function saving(state = 0, action) {
  switch (action.type) {
    case "save-money":
      return state + 1 * 100;
    case "withdraw-money":
      return state - 1 * 100;
    default:
      return 0;
  }
}

const store = createStore(
  saving,
  //使用chrome redux插件
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const init = store.getState();
console.log(`一开始有${init}元`);

function listener() {
  const current = store.getState();
  console.log(`现在有${current}元`);
}

store.subscribe(listener);

store.dispatch({ type: "save-money" });
store.dispatch({ type: "save-money" });
store.dispatch({ type: "save-money" });
store.dispatch({ type: "withdraw-money" });
