import { createStore } from "redux";

export function saving(state = 0, action) {
  switch (action.type) {
    case "save-money":
      return state + 1 * 100;
    case "withdraw-money":
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
