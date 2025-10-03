# Aplicación To-Do List con React

## Guía 07 - Desarrollo de Software I

Esta aplicación de lista de tareas implementa las siguientes funcionalidades:

### ✨ Características implementadas:
- ✅ **Fechas para las tareas**: Cada tarea tiene una fecha asignada
- ✅ **Opción de edición**: Puedes editar tanto el texto como la fecha de las tareas
- ✅ **Almacenamiento Local**: Las tareas se guardan en localStorage y persisten al recargar la página

### 🚀 Cómo ejecutar el proyecto:

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar la aplicación:
```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

### 📁 Estructura del proyecto:
```
src/
  ├── App.js          # Componente principal con la lógica de estado
  ├── App.css         # Estilos del componente principal
  ├── TodoList.js     # Componente que renderiza la lista de tareas
  ├── TodoItem.js     # Componente individual de cada tarea
  ├── TodoItem.css    # Estilos de cada tarea
  ├── index.js        # Punto de entrada de React
  └── index.css       # Estilos globales
```

### 💡 Funcionalidades:
- Agregar nuevas tareas con texto y fecha
- Editar tareas existentes
- Eliminar tareas
- Las tareas se guardan automáticamente en el navegador
- Interfaz moderna y responsive
