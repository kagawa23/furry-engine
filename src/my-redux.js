
export function createStore(reducer){
    let currentState = null;
    let listeners = [];
    function getState(){
        return currentState;
    }
    function subscribe(fn){
        listeners.push(fn);
    }
    function dispatch(action){
        currentState = reducer(currentState,action);
        listeners.forEach(v=>v())
        return action;
    }
    dispatch({type:'my-redux@init'});
    return { getState, subscribe, dispatch};
}