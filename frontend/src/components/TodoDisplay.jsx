import React from "react";

const TodoDisplay = ({todos}) => {
  if(!todos){
    return <div>Error displaying todos</div>
  }
  const completedTodo = todos?.filter((todo) => todo.completed === true).length;

  return (
    <div className="w-1/3 mx-auto flex items-center justify-around p-5 mt-20 border rounded-2xl">
      <div className="">
        <h1 className="text-4xl font-bold ">Todo Done</h1>
        <h2 className="tracking-wider">Keep it up</h2>
      </div>
      <div className="size-32 flex text-3xl items-center justify-center font-bold bg-custom-orange tracking-widest rounded-full">
        <p className="text-black ">{completedTodo}/{todos.length}</p>
      </div>
    </div>
  );
};

export default TodoDisplay;
