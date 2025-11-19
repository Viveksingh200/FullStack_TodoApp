import React, { useState } from "react";
import { Plus } from "lucide-react";
import TodoCards from "./TodoCards";
import { axiosInstance } from "../lib/AxiosInstance";
import toast from "react-hot-toast";

export default function TodoForm({todos, getTodos}) {
  const [title, setTitle] = useState("");

  //Create todo
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!title) return toast.error("Please enter a todo title!");
    try {
      await axiosInstance.post("/create", {title});
      setTitle("");
      getTodos();
      toast.success("Todo added successfully");
    } catch (error) {
      console.error("Error creating todo", error);
      toast.error("Error adding todo-list");
    }
  }
  
  return (
    <>
    <form 
      onSubmit={handleSubmit}
      className="w-1/3 items-center justify-between flex mx-auto gap-5 mt-10" >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="write your next tasks"
        className="w-full rounded-xl p-3 bg-stone-900 outline-0"
      />
      <button className="size-12  flex items-center justify-center text-black rounded-full shrink-0 bg-custom-orange" type="submit">
        <Plus size={26}/>
      </button>
    </form>

    {/*  Todo Card Container */}
    <div className="w-1/3 mt-10 mx-auto flex flex-col items-center justify-center gap-3 pb-10">
        {
            todos.length === 0 ? (
                <div>No Todos to show</div>
            ) : (
                todos.map((todo) => <TodoCards todo={todo} key={todo._id} getTodos={getTodos}/>)
            )
        }
    </div>
    </>
  );
}
