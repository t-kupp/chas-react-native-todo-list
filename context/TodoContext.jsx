import { createContext, useContext, useState } from 'react';

export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  function addTodo(title, description) {
    const newTodoItem = { id: Date.now(), title: title, description: description, isDone: false };
    const newTodoList = [...todoList, newTodoItem];
    setTodoList(newTodoList);
  }

  function deleteTodo(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }

  function toggleIsDone(id) {
    const newTodoList = todoList.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));

    setTodoList(newTodoList);
  }

  console.log(todoList);

  return (
    <TodoContext.Provider value={{ todoList, addTodo, deleteTodo, toggleIsDone }}>{children}</TodoContext.Provider>
  );
}

export const useTodo = () => useContext(TodoContext);
