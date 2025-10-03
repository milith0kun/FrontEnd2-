import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [date, setDate] = useState('');

  // Cargar desde localStorage al inicio
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Guardar en localStorage cuando cambian las tareas
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      // Si no hay tareas, limpiar localStorage
      localStorage.removeItem('tasks');
    }
  }, [tasks]);

  const handleAdd = () => {
    if (input.trim() === '') return;

    const newTask = {
      text: input,
      date: date || new Date().toISOString().split('T')[0],
      editable: false
    };

    setTasks([...tasks, newTask]);
    setInput('');
    setDate('');
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleEdit = (index) => {
    const newTasks = [...tasks];
    newTasks[index].editable = !newTasks[index].editable;
    setTasks(newTasks);
  };

  const handleUpdate = (index, newText, newDate) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    newTasks[index].date = newDate;
    newTasks[index].editable = false;
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1 className="title">📝 Mi To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Nueva tarea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        />
        <input
          type="date"
          className="input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="add-button" onClick={handleAdd}>
          Agregar
        </button>
      </div>
      <TodoList
        tasks={tasks}
        onDelete={handleDelete}
        onToggleEdit={handleToggleEdit}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
