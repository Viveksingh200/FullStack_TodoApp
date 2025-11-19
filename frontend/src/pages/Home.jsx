import React, { useEffect, useState } from "react";
import Nav from "../components/Nav.jsx";
import { useDarkTheme } from "react-theme-snap";
import TodoDisplay from "../components/TodoDisplay.jsx";
import TodoForm from "../components/TodoForm.jsx";
import { axiosInstance } from "../lib/AxiosInstance.js";

export default function Home() {
  const { themeClasses, isDark, toggleTheme } = useDarkTheme();
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const res = await axiosInstance.get("/get-todos");
      const data = res.data?.data;
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className={`min-h-screen ${themeClasses.home}`}>
      <Nav isDark={isDark} toggleTheme={toggleTheme} />
      <TodoDisplay todos={todos}/>
      <TodoForm todos={todos} getTodos={getTodos} />
    </div>
  );
}
