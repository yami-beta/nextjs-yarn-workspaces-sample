import { useState, useCallback } from "react";

export type Todo = {
  text: string;
  completed: boolean;
};

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const appendTodo = useCallback((todo: Todo) => {
    setTodoList(prev => [...prev, todo]);
  }, []);

  const updateTodo = useCallback((index: number, todo: Todo) => {
    setTodoList(prev => {
      return [...prev.slice(0, index), todo, ...prev.slice(index + 1)];
    });
  }, []);

  return {
    todoList,
    appendTodo,
    updateTodo
  };
};
