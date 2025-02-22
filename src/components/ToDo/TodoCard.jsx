function TodoCard({ id, handleEdit, handleDelete, children }) {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEdit(id)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDelete(id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
export default TodoCard;
