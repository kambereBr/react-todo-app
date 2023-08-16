import { useState, useEffect } from 'react';
import ToDoList from '../components/ToDoList';
import InputTodo from '../components/InputTodo';

const ToDoLogic = () => {
  const getId = () => Math.floor(Math.random() * 9999999999);

  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: getId(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        /* eslint-disable no-param-reassign */
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  /* eslint-disable max-len */
  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <ToDoList todosProps={todos} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate} />
    </div>
  );
};
export default ToDoLogic;
