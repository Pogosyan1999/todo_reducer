export default function reducer(state, action) {
  switch (action.type) {
    case "Add":
      return [
        ...state,
        {
          id: new Date().getMilliseconds(),
          text: action.payload.text,
          checked: false,
        },
      ];
    case "Delete":
      return state.filter((todo) => todo.id !== action.payload.id);
   case "Checked":
    return [state.map((todo)=>todo.id === action.payload.id? {...todo, checked:!todo.checked} : {todo})];
    case"ClearAll":
    return state.filter((todo) => action.payload.checked);

    default:
      return state;
  }
}
