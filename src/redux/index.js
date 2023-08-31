const { configureStore, createSlice } = require("@reduxjs/toolkit");

const arr = JSON.parse(localStorage.getItem("todos")) || [];

const mainSlice = createSlice({
  name: "todo",
  initialState: {
    todos: arr,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        title: action.payload,
        status: false,
        id: Date.now(),
      });
    },
    deleteTodo: (state, action) => {
      const newArr = state.todos.filter((item) => item.id !== action.payload);
      state.todos = newArr;
    },
    checkBoxChange: (state, action) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload ? { ...item, status: !item.status } : item
      );
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, title: action.payload.title }
          : item
      );
    },
  },
});

export const { addTodo, deleteTodo, checkBoxChange, editTodo } =
  mainSlice.actions;

const store = configureStore({
  reducer: mainSlice.reducer,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("todos", JSON.stringify(state.todos));
});

export default store;