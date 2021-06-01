import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // 入力フォーム入力時
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタン押下時
  const onClickCreateButton = () => {
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
  };
  // 完了ボタン押下時
  const onClickCompleteButton = (index) => {
    const completeTodo = incompleteTodos[index];
    incompleteTodos.splice(index, 1);
    setCompleteTodos([...completeTodos, completeTodo]);
  };
  // 削除ボタン押下時
  const onClickDeleteButton = (index) => {
    incompleteTodos.splice(index, 1);
    setIncompleteTodos([...incompleteTodos]);
  };
  // 戻すボタン押下時
  const onClickBackButton = (index) => {
    const backTodo = completeTodos[index];
    completeTodos.splice(index, 1);
    console.log(`incomp.. ${incompleteTodos}, backto: ${backTodo}`);
    setIncompleteTodos([...incompleteTodos, backTodo]);
  };

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
      <CompleteTodos
        todos={completeTodos}
        onClickBackButton={onClickBackButton}
      />
    </>
  );
};
