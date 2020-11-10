import React, { useState } from "react";
import { useTodoList } from "nextjs-yarn-workspaces-sample-module";

type TodoListProps = {};

export const TodoList: React.FC<TodoListProps> = () => {
  const { todoList, appendTodo, updateTodo } = useTodoList();
  const [draft, setDraft] = useState("");

  return (
    <div>
      <input
        type="text"
        value={draft}
        onChange={event => {
          setDraft(event.currentTarget.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          appendTodo({ text: draft, completed: false });
          setDraft("");
        }}
      >
        追加
      </button>
      <ul>
        {todoList.map((todo, i) => (
          <li key={todo.text}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={event => {
                  updateTodo(i, {
                    ...todo,
                    completed: event.currentTarget.checked
                  });
                }}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
