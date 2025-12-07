// src/redux/taskSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks, addTask, updateTask, deleteTask } from "../api/taskApi";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const res = await getTasks();
  return res.data;
});

export const createTask = createAsyncThunk("tasks/create", async (task) => {
  const res = await addTask(task);
  return res.data;
});

export const modifyTask = createAsyncThunk(
  "tasks/update",
  async ({ id, updates }) => {
    const res = await updateTask(id, updates);
    return res.data;
  }
);

export const removeTask = createAsyncThunk("tasks/delete", async (id) => {
  await deleteTask(id);
  return id;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: { items: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(modifyTask.fulfilled, (state, action) => {
        const index = state.items.findIndex((t) => t._id === action.payload._id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t._id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
