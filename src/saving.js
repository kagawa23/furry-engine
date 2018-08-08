import { createStore } from "redux";

export function saving(state = 0, action) {
  switch (action.type) {
    case "save-money":
      return state + 1 * 100;
    case "withdraw-money":
      return state - 1 * 100;
    case "withdraw-p2p":
      return state - 1 * 100;
    default:
      return 0;
  }
}

export function saveMoney() {
  return { type: "save-money" };
}

export function widthdrawMoney() {
  return { type: "withdraw-money" };
}

function widthdrawP2P() {
  return { type: "withdraw-p2p" };
}

export function p2pWidthdraw() {
  return (dispatch, state) => {
    setTimeout(() => dispatch(widthdrawP2P()), 2000);
  };
}
