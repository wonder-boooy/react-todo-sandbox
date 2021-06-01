import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickCompleteButton, onClickDeleteButton } = props;

  return (
    <>
      <h2>未完了のTodo</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <p>{todo}</p>
              <button onClick={() => onClickCompleteButton(index)}>完了</button>
              <button onClick={() => onClickDeleteButton(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
