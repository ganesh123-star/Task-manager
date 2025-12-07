// src/api/taskApi.js
import api from "./axiosConfig";

export const getTasks = () => api.get("/tasks");
export const addTask = (task) => api.post("/tasks", task);
export const updateTask = (id, updates) => api.put(`/tasks/${id}`, updates);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
