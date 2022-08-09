import styles from "./TodoItem.module.css";
const TodoItem = ({ todo, onDelete,check,id  }) => {
  return (
    <div className={styles.container}>
      <div className={styles.checkBox}>
        <input type="checkbox" checked = {todo.checked} onChange = {()=>{
          check(id)
        }}/>
      </div>
      <div className={styles.inp}>
        <input type="text" readOnly value={todo.text} className={todo.checked ? 'checking' : null }/>
      </div>
      <div className={styles.delete}>
        <button
          onClick={() => {
            onDelete(todo);
          }}
        >
          Del
        </button>
      </div>
      <div className={styles.edit}>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoItem;
