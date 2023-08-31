import { useState } from 'react';
import { Link } from 'react-router-dom';
import TaskCard from '../../components/task-card';

import './tasks.css';

type EditingType = {
  editing: boolean;
  index: number;
};

function Tasks() {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [editing, setEditing] = useState<EditingType | false>(false);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (editing) {
      const newList = todoList;
      newList[editing.index] = task;
      if (task.length > 0) {
        setTodoList(newList);
        setEditing(false);
      } else {
        sendAlert();
      }
    } else if (task.length > 0) {
      setTodoList([...todoList, task]);
    } else {
      sendAlert();
    }
    setTask('');
  };

  const sendAlert = () => {
    alert('O campo não pode estar vazio.');
  };

  const removeTask = (taskToBeRemoved: string) => {
    let count = 0;
    const newList: string[] = [];
    todoList.forEach((element) => {
      if (element !== taskToBeRemoved) newList.push(element);
      if (element === taskToBeRemoved && count > 0) newList.push(element);
      if (element === taskToBeRemoved) {
        count += 1;
      }
    });
    setTodoList(newList);
    if (editing) setEditing(false);
  };

  const editTask = (taskToBeEdited: string) => {
    const index = todoList.indexOf(taskToBeEdited);
    setTask(taskToBeEdited);
    setEditing({ editing: true, index });
  };

  const cancelEdit = () => {
    setEditing(false);
    setTask('');
  };

  return (
    <div className="tasks-page">
      <h1>Minha Lista</h1>
      <div className="input-container">
        <input value={ task } onChange={ ({ target }) => setTask(target.value) } />
        <button onClick={ addTask }>{editing ? 'Atualizar' : 'Adicionar'}</button>
        {editing && <button onClick={ cancelEdit }>Cancelar</button>}
      </div>
      {todoList.length > 0 && (
        <div className="todo-list-container">
          {todoList.map((todoTask, index) => (
            <TaskCard
              key={ index }
              task={ todoTask }
              removeTask={ removeTask }
              editTask={ editTask }
            />
          ))}
        </div>
      )}
      <hr />
      <Link to="/">Voltar para a tela de Login</Link>
    </div>
  );
}

export default Tasks;
