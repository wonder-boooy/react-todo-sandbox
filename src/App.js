import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickCreateButton = () => {
    const newTodo = todoText;
    setIncompleteTodos([...incompleteTodos, newTodo]);
    setTodoText("");
  };
  const onClickCompleteButton = () => alert("完了ボタン押された");
  const onClickDeleteButton = () => alert("削除ボタン押された");

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickCreateButton}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickCompleteButton={onClickCompleteButton}
        onClickDeleteButton={onClickDeleteButton}
      />
    </>
  );
};
