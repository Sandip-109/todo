const { createSlice } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const { title, desc } = action.payload;
      const newTodo = { id: state.data.length + 1, title, desc };

      state.data = [newTodo, ...state.data];
    },
    editTodo: (state, action) => {
      const { id, title, desc } = action.payload;
      const todoIndex = state.data.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.data[todoIndex] = { ...state.data[todoIndex], title, desc };
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.data = state.data.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
