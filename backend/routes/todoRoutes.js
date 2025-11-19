import express from "express";
import { getAllTodos, UpdatedTodo, DeleteTodo, CreatedTodo, EditTodo } from "../controllers/todo.controller.js";

const router = express();

router.get("/get-todos", getAllTodos);

router.post("/create", CreatedTodo);

router.put("/:id", EditTodo);

router.put("/status/:id", UpdatedTodo);

router.delete("/delete-todo/:id", DeleteTodo);

export default router;