import { Todo } from "../models/todo.models.js";

// Get all todos
export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json({ success: true, data: todos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create a new todo
export const CreatedTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title)
      return res
        .status(400)
        .json({ success: false, message: "Please enter a title" });

    const createdTodo = await Todo.create({ title });
    res.status(201).json({ success: true, data: createdTodo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a todo
export const EditTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    if (!title)
      return res
        .status(400)
        .json({ success: false, message: "Please provide a title" });

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title },
      { new: true } // returns updated document
    );

    if (!updatedTodo)
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });

    res.json({ success: true, data: updatedTodo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update status
export const UpdatedTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    if (typeof completed !== "boolean")
      return res
        .status(400)
        .json({ success: false, message: "Error updating status" });

    const updateStatus = await Todo.findByIdAndUpdate(
      id,
      { completed },
      { new: true } // returns updated document
    );

    if (!updateStatus)
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });

    res.json({ success: true, data: {message: "Todo Status Updated", updatedTodo: updateStatus} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a todo
export const DeleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo)
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });

    res.json({ success: true, message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
