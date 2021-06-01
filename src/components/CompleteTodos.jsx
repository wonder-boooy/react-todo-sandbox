import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBackButton } = props;

  return (
    <>
      <h2>完了済のTodo</h2>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <p>{todo}</p>
              <button onClick={() => onClickBackButton(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
