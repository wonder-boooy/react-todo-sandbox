import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  return <InputTodo todoText={todoText} onChange={onChangeTodoText} />;
};
