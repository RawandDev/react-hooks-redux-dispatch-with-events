// add code snippets from README

let state;

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = reducer(state, action);
  render();
}

function render() {
  const container = document.getElementById("container");
  container.innerHTML = state.count;
}

dispatch({type: '@@INIT'})
