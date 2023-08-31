type TaskCardProps = {
  task: string;
  removeTask: (removedTask: string) => void;
  editTask: (editedTask: string) => void;
};

function TaskCard({ task, removeTask, editTask }: TaskCardProps) {
  return (
    <div className="todo-list-card">
      <p>{task}</p>
      <button onClick={ () => removeTask(task) }>🗑️</button>
      <button onClick={ () => editTask(task) }>✏️</button>
    </div>
  );
}

export default TaskCard;
