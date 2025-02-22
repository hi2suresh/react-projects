import TodoCard from './TodoCard';

function TodoList({ todos, handleEdit, handleDelete }) {
  return (
    <ul className="main">
      {todos.map(({ id, item }) => {
        return (
          <TodoCard
            key={id}
            id={id}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          >
            <p>{item}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
export default TodoList;
