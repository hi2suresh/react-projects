import { useId, useState } from 'react';

function TodoInput({ handleAdd, todoValue, setTodoValue }) {
  return (
    <header>
      <input
        placeholder="Enter todo..."
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        onClick={() => {
          handleAdd({ id: crypto.randomUUID(), item: todoValue });
          setTodoValue('');
        }}
      >
        Add
      </button>
    </header>
  );
}
export default TodoInput;
