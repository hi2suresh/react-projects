import { useEffect, useState } from 'react';

import TodoInput from './components/ToDo/TodoInput';
import TodoList from './components/ToDo/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const [todoValue, setTodoValue] = useState('');

  const persistData = (newList) => {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  };
  const handleAdd = (newTodo) => {
    console.log(newTodo);
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    persistData(newTodoList);
  };

  const handleEdit = (id) => {
    const editableTodo = todos.find((todo) => todo.id === id);
    setTodoValue(editableTodo.item);
    handleDelete(id);
    persistData(todos);
  };
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    persistData(updatedTodos);
  };

  useEffect(() => {
    if (!localStorage) return;
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) return;
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);
  return (
    <>
      <>
        <TodoInput
          handleAdd={handleAdd}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
        />
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </>
    </>
  );
}

export default App;
