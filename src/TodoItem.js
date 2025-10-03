import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ task, onDelete, onToggleEdit, onUpdate }) {
  const [editedText, setEditedText] = useState(task.text);
  const [editedDate, setEditedDate] = useState(task.date);

  const handleSave = () => {
    onUpdate(editedText, editedDate);
  };

  return (
    <li className="todo-item">
      {task.editable ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="edit-input"
          />
          <input
            type="date"
            value={editedDate}
            onChange={(e) => setEditedDate(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave} className="save-button">
            Guardar
          </button>
        </>
      ) : (
        <>
          <div>
            <strong>{task.text}</strong>
            <br />
            <small>📅 {task.date}</small>
          </div>
          <div>
            <button onClick={onToggleEdit} className="edit-button">
              Editar
            </button>
            <button onClick={onDelete} className="delete-button">
              Eliminar
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
