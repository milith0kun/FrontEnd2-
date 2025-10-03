import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onDelete, onToggleEdit, onUpdate }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
          onToggleEdit={() => onToggleEdit(index)}
          onUpdate={(newText, newDate) => onUpdate(index, newText, newDate)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
