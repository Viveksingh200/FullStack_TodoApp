import { SquarePen, Trash } from "lucide-react";
import React, { useState } from "react";
import { axiosInstance } from "../lib/AxiosInstance";
import toast from "react-hot-toast";

const TodoCards = ({todo, getTodos}) => {
  const [isCompleted, setIsCompleted] = useState(todo?.isCompleted|| false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo?.title || "");


  //Edit title 
  const handleEdit = async(e) => {
    try{
      e.preventDefault();
      await axiosInstance.put(`/${todo._id}`, {title});
      getTodos();
      setIsEditing(false);
      toast.success("Todo edited successfully");
    } catch(error){
      console.log(error);
      toast.error("Error editing todo");
    }
  }


  // Delete todo
  const handleDelete = async () => {
    try{
      await axiosInstance.delete(`/delete-todo/${todo._id}`);
      getTodos();
      toast.success("Todo deleted successfully");
    } catch(error){
      console.log(error);
    }
  }

  //handle Status
  const handleStatus = async(id, completed) => {
    try {
      await axiosInstance.put(`/status/${id}`, {completed: completed});
      setIsCompleted((prev) => !prev);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full border rounded-md p-4 bg-stone-900 flex items-center justify-between">
      <div
        onClick={() => handleStatus(todo._id, !isCompleted)
        }
        className={` size-7 cursor-pointer rounded-full ${
          isCompleted ? "bg-green-400" : " border-2 border-orange"
        } ${isEditing ? "hidden" : "block"}`}
      ></div>
      <input
        type="text"
        defaultValue={title}
        disabled={!isEditing}
        className={` p-1 outline-none font-semibold ${
          isEditing ? "w-10/12" : "w-9/12"
        } ${isCompleted && "line-through"}`}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div
        className={`${
          isEditing ? "hidden" : "flex items-center justify-center gap-5"
        } *:cursor-pointer`}
      >
        <SquarePen
          className={`${isCompleted && "hidden"}`}
          onClick={() => setIsEditing((p) => !p)}
        />
        <Trash 
          onClick={handleDelete}
        />
      </div>
      <div
        onClick={handleEdit}
        className={`bg-custom-orange p-1 cursor-pointer px-2 rounded-lg text-black font-semibold ${
          isEditing ? "block" : "hidden"
        }`}
      >
        Save
      </div>
    </div>
  );
};

export default TodoCards;
