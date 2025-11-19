import { model, Schema } from "mongoose";


const todoSchema = new Schema(
    {
        title: { type: String, required: true},
        completed: { type: Boolean, default: false, required: true},
    },
    {
        timestamps: true
    }
)

export const Todo = model("Todo", todoSchema);