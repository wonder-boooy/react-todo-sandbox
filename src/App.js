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
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  // 削除ボタン押下時
  const onClickDeleteButton = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    setIncompleteTodos(newIncompleteTodos);
  };
  // 戻すボタン押下時
  const onClickBackButton = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
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
