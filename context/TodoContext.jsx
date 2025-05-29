import { createContext, useContext, useState } from 'react';

export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([
    {
      title: 'Example Task',
      description: 'This is an example task with a very interesting description.',
      id: 0,
    },
  ]);
  const [finishedTodo, setFinishedTodo] = useState([
    {
      title: 'Another Example Task',
      description: 'Wow, this one is already done.',
      id: 1,
    },
  ]);

  function addTodo(title, description) {
    const newTodoItem = { id: Date.now(), title: title, description: description, isDone: false };
    const newTodoList = [...todoList, newTodoItem];
    setTodoList(newTodoList);
  }

  function toggleIsDone(todo) {
    // Add todo item to finished tasks
    setFinishedTodo((prev) => [...prev, todo]);

    // Remove todo item from todo list
    const newTodoList = todoList.filter((item) => item.id !== todo.id);
    setTodoList(newTodoList);
  }

  return (
    <TodoContext.Provider value={{ todoList, addTodo, toggleIsDone, finishedTodo }}>{children}</TodoContext.Provider>
  );
}

export const useTodo = () => useContext(TodoContext);
