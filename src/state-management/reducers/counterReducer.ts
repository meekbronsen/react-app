interface Action {
  type: "INCREMENT" | "RESET"; // telling ts that the value can only be increment or reset to avoid typos in the front end.( Union of literal Values)
}

const counterReducer = (state: number, action: Action): number => {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "RESET") return 0;
  return state; // if the actions are non of the above, just return current state
};

export default counterReducer;
