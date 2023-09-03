import {
  ADD_TODO,
  DELETE_ALL,
  REMOVE_TODO,
  EDIT_TODO,
  UPDATE_CHECKBOX,
} from "../actions/index";

const initialState = [
  { id: 1, todo: "Get a new Laptop", completed: false },
  { id: 2, todo: "Start Investing", completed: false },
  { id: 3, todo: "Solve POD", completed: true },
];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case REMOVE_TODO:
      const filterdTodos = state.filter((todo) => todo.id !== action.payload);
      return filterdTodos;
    case EDIT_TODO:
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.todo = data.todo;
          item.completed = data.completed;
        }
        updatedArray.push(item);
      });

      return updatedArray;

    case UPDATE_CHECKBOX:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArray.push(item);
      });
      return todoArray;

    default:
      return state;
  }
};
