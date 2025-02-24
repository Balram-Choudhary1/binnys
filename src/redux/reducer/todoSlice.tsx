import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  desc: string;
  dueDate: string;
  
}

interface TodoState {
  data: Todo[];
}

const initialState: TodoState = {
  data: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, "id">>) => {
      const todoData: Todo = {
        id: state.data?.length + 1,
        ...action.payload,
      };
      state.data = [todoData, ...state?.data];
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      state.data = state.data.filter((i) => i.id !== action.payload.id);
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.data.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...action.payload };
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;