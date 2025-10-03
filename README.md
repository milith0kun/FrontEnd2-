# 📝 To-Do List App - Guía 07 Desarrollo de Software I

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

**Aplicación de lista de tareas desarrollada con React**

[Reportar Bug](https://github.com/milith0kun/FrontEnd2-/issues) • [Solicitar Feature](https://github.com/milith0kun/FrontEnd2-/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Objetivos Cumplidos](#-objetivos-cumplidos)
- [Capacidades Desarrolladas](#-capacidades-desarrolladas)
- [Funcionalidades Implementadas](#-funcionalidades-implementadas)
- [Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Explicación del Código](#-explicación-del-código)
- [Conceptos de React Aplicados](#-conceptos-de-react-aplicados)
- [Guía Visual](#-guía-visual)
- [Solución de Problemas](#-solución-de-problemas)
- [Autor](#-autor)

---

## 🎯 Acerca del Proyecto

Este proyecto es una aplicación web de lista de tareas (To-Do List) desarrollada como parte de la **Guía 07** del curso de **Desarrollo de Software I**. La aplicación permite a los usuarios gestionar sus tareas diarias de manera eficiente, con funcionalidades modernas como edición en línea y persistencia de datos.

### ✨ Características Principales:
- ✅ **Fechas para las tareas**: Cada tarea incluye una fecha para mejor organización
- ✅ **Opción de edición**: Edita tanto el texto como la fecha de cualquier tarea
- ✅ **Almacenamiento Local**: Las tareas persisten en el navegador usando localStorage
- ✅ **Interfaz moderna**: Diseño responsive con gradientes y animaciones
- ✅ **Experiencia fluida**: Interacciones intuitivas y feedback visual

---

## 🎓 Objetivos Cumplidos

Al finalizar esta sesión de laboratorio, se lograron los siguientes objetivos:

| Objetivo | Estado | Descripción |
|----------|--------|-------------|
| ✅ Instalación y configuración | **Completado** | Proyecto React configurado con todas las dependencias |
| ✅ Componentes funcionales | **Completado** | 3 componentes funcionales: App, TodoList, TodoItem |
| ✅ Captura de información | **Completado** | Inputs controlados con useState para texto y fecha |
| ✅ Comunicación con props | **Completado** | Props utilizados para pasar datos y funciones |
| ✅ Eventos de clic | **Completado** | Eventos para agregar, editar y eliminar tareas |

---

## 💪 Capacidades Desarrolladas

### 1. Estructura básica de React
- ✅ Comprensión de la arquitectura de componentes
- ✅ Organización de archivos y carpetas
- ✅ Importación y exportación de módulos

### 2. JSX (JavaScript XML)
- ✅ Sintaxis JSX para crear elementos
- ✅ Expresiones JavaScript dentro de JSX
- ✅ Renderizado condicional
- ✅ Listas y keys

### 3. Estado con useState
- ✅ Declaración de estado en componentes funcionales
- ✅ Actualización de estado de forma inmutable
- ✅ Manejo de múltiples estados

### 4. División en componentes
- ✅ **App.js**: Componente contenedor principal
- ✅ **TodoList.js**: Componente de presentación de lista
- ✅ **TodoItem.js**: Componente reutilizable de tarea

### 5. Comunicación mediante props
- ✅ Paso de datos de padre a hijo
- ✅ Paso de funciones como callbacks
- ✅ Propagación de eventos hacia arriba

### 6. Manejo de eventos
- ✅ onClick para botones
- ✅ onChange para inputs
- ✅ onKeyPress para atajos de teclado
- ✅ Eventos sintéticos de React

---

## 🚀 Funcionalidades Implementadas

### 📅 1. Fechas para las Tareas

**Requisito de la Guía 07**: Cada tarea debe tener una fecha asociada.

**Implementación**:
```javascript
// En App.js - Estado para la fecha
const [date, setDate] = useState('');

// Input de fecha en el formulario
<input
  type="date"
  className="input"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>

// Asignación automática si no se selecciona
const newTask = {
  text: input,
  date: date || new Date().toISOString().split('T')[0],
  editable: false
};
```

**Características**:
- ✅ Campo de fecha al crear tarea
- ✅ Fecha automática (hoy) si no se especifica
- ✅ Formato ISO (YYYY-MM-DD)
- ✅ Visualización con ícono 📅 en cada tarea

---

### ✏️ 2. Opción de Edición

**Requisito de la Guía 07**: Permitir editar tareas existentes.

**Implementación**:
```javascript
// En App.js - Función para toggle edición
const handleToggleEdit = (index) => {
  const newTasks = [...tasks];
  newTasks[index].editable = !newTasks[index].editable;
  setTasks(newTasks);
};

// Función para actualizar tarea
const handleUpdate = (index, newText, newDate) => {
  const newTasks = [...tasks];
  newTasks[index].text = newText;
  newTasks[index].date = newDate;
  newTasks[index].editable = false;
  setTasks(newTasks);
};

// En TodoItem.js - Renderizado condicional
{task.editable ? (
  // Modo edición: inputs editables
  <>
    <input value={editedText} onChange={(e) => setEditedText(e.target.value)} />
    <input type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
    <button onClick={handleSave}>Guardar</button>
  </>
) : (
  // Modo vista: mostrar texto
  <>
    <strong>{task.text}</strong>
    <small>📅 {task.date}</small>
    <button onClick={onToggleEdit}>Editar</button>
  </>
)}
```

**Características**:
- ✅ Botón "Editar" en cada tarea
- ✅ Modo edición con inputs editables
- ✅ Edición simultánea de texto y fecha
- ✅ Botón "Guardar" para confirmar cambios
- ✅ Estado local para cambios temporales

---

### 💾 3. Almacenamiento Local

**Requisito de la Guía 07**: Persistir datos en el navegador.

**Implementación**:
```javascript
// Cargar tareas desde localStorage al iniciar
useEffect(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  setTasks(storedTasks);
}, []); // Array vacío = se ejecuta solo una vez al montar

// Guardar tareas en localStorage cuando cambian
useEffect(() => {
  if (tasks.length > 0) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    localStorage.removeItem('tasks');
  }
}, [tasks]); // Se ejecuta cada vez que 'tasks' cambia
```

**Características**:
- ✅ Persistencia automática de datos
- ✅ Carga automática al iniciar la app
- ✅ No requiere backend ni base de datos
- ✅ Datos específicos por navegador/dominio
- ✅ Capacidad aproximada de 5-10 MB

---

## 🛠️ Tecnologías Utilizadas

### Core
- **React 18.2.0** - Biblioteca principal de UI
- **React DOM 18.2.0** - Renderizado en el DOM
- **React Scripts 5.0.1** - Scripts y configuración de desarrollo

### Desarrollo
- **Node.js** - Entorno de ejecución JavaScript
- **npm** - Gestor de paquetes
- **Webpack** - Empaquetado de módulos (incluido en react-scripts)
- **Babel** - Transpilación de JSX y ES6+

### APIs del Navegador
- **localStorage API** - Persistencia de datos
- **DOM Events API** - Interacciones del usuario

### Estándares Web
- **HTML5** - Estructura semántica
- **CSS3** - Estilos, animaciones y responsive design
- **ES6+** - JavaScript moderno (arrow functions, destructuring, etc.)

---

## 📥 Instalación

### Prerrequisitos

Asegúrate de tener instalado:
- ✅ **Node.js** (versión 14 o superior) - [Descargar](https://nodejs.org/)
- ✅ **npm** (incluido con Node.js)
- ✅ **Git** (opcional, para clonar) - [Descargar](https://git-scm.com/)

### Verificar Instalaciones

```bash
node --version    # Debe mostrar v14.x.x o superior
npm --version     # Debe mostrar 6.x.x o superior
```

### Pasos de Instalación

#### Opción 1: Clonar desde GitHub

```bash
# 1. Clonar el repositorio
git clone https://github.com/milith0kun/FrontEnd2-.git

# 2. Entrar al directorio
cd FrontEnd2-

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm start
```

#### Opción 2: Descargar ZIP

1. Descargar el proyecto desde [GitHub](https://github.com/milith0kun/FrontEnd2-)
2. Extraer el archivo ZIP
3. Abrir terminal en la carpeta extraída
4. Ejecutar `npm install`
5. Ejecutar `npm start`

### 🎉 ¡Listo!

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000)

### Scripts Disponibles

```bash
npm start          # Inicia el servidor de desarrollo (puerto 3000)
npm run build      # Crea la versión optimizada para producción
npm test           # Ejecuta los tests (si hay configurados)
npm run eject      # Expone la configuración de Webpack (irreversible)
```

---

## 📁 Estructura del Proyecto

```
FrontEnd2-/
│
├── node_modules/          # 📦 Dependencias instaladas (no subir a Git)
│
├── public/
│   └── index.html        # 📄 HTML base de la aplicación
│
├── src/
│   ├── App.js            # ⭐ Componente principal (lógica de estado)
│   ├── App.css           # 🎨 Estilos del contenedor principal
│   ├── TodoList.js       # ⭐ Componente de lista (renderiza tareas)
│   ├── TodoItem.js       # ⭐ Componente de tarea individual
│   ├── TodoItem.css      # 🎨 Estilos de cada tarea
│   ├── index.js          # 🚀 Punto de entrada de React
│   └── index.css         # 🎨 Estilos globales y reset
│
├── .gitignore            # 🚫 Archivos ignorados por Git
├── package.json          # 📋 Configuración y dependencias del proyecto
├── package-lock.json     # 🔒 Versiones exactas de dependencias
├── README.md             # 📖 Este archivo (documentación principal)
└── INSTRUCCIONES.md      # 📘 Documentación técnica detallada
```

### Descripción de Archivos Clave

| Archivo | Propósito | Conceptos React |
|---------|-----------|-----------------|
| `App.js` | Componente principal con toda la lógica de negocio | useState, useEffect, event handlers |
| `TodoList.js` | Renderiza la lista iterando sobre el array de tareas | props, map(), key |
| `TodoItem.js` | Componente reutilizable para cada tarea individual | useState, conditional rendering |
| `App.css` | Estilos del contenedor, inputs y botón agregar | CSS Grid/Flexbox |
| `TodoItem.css` | Estilos de cards de tareas y botones de acción | CSS transitions, hover effects |

---

## 💻 Explicación del Código

### 📄 App.js - Componente Principal

**Responsabilidades**:
- Gestionar el estado global de las tareas
- Manejar inputs del formulario
- Sincronizar con localStorage
- Proveer funciones CRUD a componentes hijos

```javascript
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  // ═══════════════════════════════════════════════════
  // 1️⃣ DECLARACIÓN DE ESTADOS
  // ═══════════════════════════════════════════════════
  
  const [tasks, setTasks] = useState([]);  // Array de tareas
  const [input, setInput] = useState('');  // Input temporal de texto
  const [date, setDate] = useState('');    // Input temporal de fecha

  // ═══════════════════════════════════════════════════
  // 2️⃣ EFECTO: Cargar tareas al montar el componente
  // ═══════════════════════════════════════════════════
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []); // Dependencias vacías = se ejecuta solo una vez

  // ═══════════════════════════════════════════════════
  // 3️⃣ EFECTO: Guardar tareas cuando cambian
  // ═══════════════════════════════════════════════════
  
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      localStorage.removeItem('tasks');
    }
  }, [tasks]); // Se ejecuta cada vez que 'tasks' cambia

  // ═══════════════════════════════════════════════════
  // 4️⃣ FUNCIÓN: Agregar nueva tarea
  // ═══════════════════════════════════════════════════
  
  const handleAdd = () => {
    if (input.trim() === '') return; // Validación: no agregar vacío

    const newTask = {
      text: input,
      date: date || new Date().toISOString().split('T')[0], // Fecha automática
      editable: false
    };

    setTasks([...tasks, newTask]); // Inmutabilidad: crear nuevo array
    setInput('');                   // Limpiar input de texto
    setDate('');                    // Limpiar input de fecha
  };

  // ═══════════════════════════════════════════════════
  // 5️⃣ FUNCIÓN: Eliminar tarea por índice
  // ═══════════════════════════════════════════════════
  
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // ═══════════════════════════════════════════════════
  // 6️⃣ FUNCIÓN: Activar/desactivar modo edición
  // ═══════════════════════════════════════════════════
  
  const handleToggleEdit = (index) => {
    const newTasks = [...tasks]; // Copia del array
    newTasks[index].editable = !newTasks[index].editable; // Toggle
    setTasks(newTasks);
  };

  // ═══════════════════════════════════════════════════
  // 7️⃣ FUNCIÓN: Actualizar tarea editada
  // ═══════════════════════════════════════════════════
  
  const handleUpdate = (index, newText, newDate) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    newTasks[index].date = newDate;
    newTasks[index].editable = false; // Salir del modo edición
    setTasks(newTasks);
  };

  // ═══════════════════════════════════════════════════
  // 8️⃣ RENDERIZADO JSX
  // ═══════════════════════════════════════════════════
  
  return (
    <div className="container">
      <h1 className="title">📝 Mi To-Do List</h1>
      
      {/* ─────────────────────────────────────────────── */}
      {/* FORMULARIO DE ENTRADA */}
      {/* ─────────────────────────────────────────────── */}
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

      {/* ─────────────────────────────────────────────── */}
      {/* LISTA DE TAREAS (Componente hijo) */}
      {/* ─────────────────────────────────────────────── */}
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
```

**📌 Conceptos clave en App.js**:
- 🔄 **useState**: Manejo de 3 estados independientes
- ⚡ **useEffect**: 2 efectos con diferentes dependencias
- 📤 **Props drilling**: Pasa funciones a componentes nietos
- 🎯 **Event Handlers**: 4 funciones para CRUD
- 🔑 **Inmutabilidad**: Spread operator para copiar arrays

---

### 📄 TodoList.js - Componente de Lista

**Responsabilidades**:
- Recibir datos y funciones del padre (App.js)
- Iterar sobre el array de tareas
- Renderizar un TodoItem por cada tarea

```javascript
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, onDelete, onToggleEdit, onUpdate }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}                    // Key única para React
          task={task}                    // Datos de la tarea
          onDelete={() => onDelete(index)}
          onToggleEdit={() => onToggleEdit(index)}
          onUpdate={(newText, newDate) => onUpdate(index, newText, newDate)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
```

**📌 Conceptos clave en TodoList.js**:
- 📥 **Destructuring de props**: Extrae props directamente en parámetros
- 🔁 **Array.map()**: Transforma array en lista de componentes
- 🔑 **Key prop**: Ayuda a React a identificar elementos
- 🎯 **Arrow functions**: Pasa parámetros a funciones de props
- 🧩 **Presentational Component**: Solo renderiza, sin lógica de negocio

---

### 📄 TodoItem.js - Componente de Tarea

**Responsabilidades**:
- Manejar estado local para edición
- Renderizar modo vista o modo edición
- Emitir eventos hacia el padre

```javascript
import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ task, onDelete, onToggleEdit, onUpdate }) {
  // ═══════════════════════════════════════════════════
  // 1️⃣ Estados locales para edición temporal
  // ═══════════════════════════════════════════════════
  
  const [editedText, setEditedText] = useState(task.text);
  const [editedDate, setEditedDate] = useState(task.date);

  // ═══════════════════════════════════════════════════
  // 2️⃣ Función para guardar cambios
  // ═══════════════════════════════════════════════════
  
  const handleSave = () => {
    onUpdate(editedText, editedDate);
  };

  // ═══════════════════════════════════════════════════
  // 3️⃣ Renderizado condicional
  // ═══════════════════════════════════════════════════
  
  return (
    <li className="todo-item">
      {task.editable ? (
        /* ─────────────────────────────────────────── */
        /* MODO EDICIÓN */
        /* ─────────────────────────────────────────── */
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
        /* ─────────────────────────────────────────── */
        /* MODO VISTA */
        /* ─────────────────────────────────────────── */
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
```

**📌 Conceptos clave en TodoItem.js**:
- 🎭 **Renderizado condicional**: Operador ternario `? :`
- 📝 **Estado local**: Para cambios temporales antes de guardar
- 🔄 **Controlled components**: Inputs controlados por estado
- 🎯 **Event bubbling**: Eventos se propagan al padre
- 🎨 **CSS modular**: Estilos importados desde archivo separado

---

## 🧠 Conceptos de React Aplicados

### 1️⃣ Componentes Funcionales

```javascript
function App() {
  return <div>Hola Mundo</div>;
}
```

✅ **Definición**: Funciones JavaScript que retornan JSX  
✅ **Ventaja**: Más simples que componentes de clase  
✅ **Uso**: Componente básico de React moderno  

---

### 2️⃣ Hooks

#### useState - Manejo de Estado

```javascript
const [tasks, setTasks] = useState([]);
```

✅ **¿Qué hace?**: Declara una variable de estado  
✅ **Sintaxis**: `[valor, función] = useState(valorInicial)`  
✅ **Regla**: Solo llamar en el nivel superior  

#### useEffect - Efectos Secundarios

```javascript
useEffect(() => {
  // Código a ejecutar
}, [dependencias]);
```

✅ **¿Qué hace?**: Ejecuta código después del renderizado  
✅ **Usos**: Fetch de datos, suscripciones, localStorage  
✅ **Dependencias**: Array que determina cuándo se ejecuta  

---

### 3️⃣ Props - Comunicación entre Componentes

```javascript
<TodoList tasks={tasks} onDelete={handleDelete} />
```

✅ **Dirección**: Padre → Hijo (unidireccional)  
✅ **Tipos**: Datos primitivos, objetos, funciones  
✅ **Inmutables**: No se pueden modificar en el hijo  

---

### 4️⃣ Eventos

```javascript
onClick={handleAdd}
onChange={(e) => setInput(e.target.value)}
onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
```

✅ **Sintaxis**: camelCase (onClick, onChange)  
✅ **Event object**: Sintético, compatible con todos los navegadores  
✅ **Arrow functions**: Para pasar parámetros  

---

### 5️⃣ Renderizado de Listas

```javascript
{tasks.map((task, index) => (
  <TodoItem key={index} task={task} />
))}
```

✅ **map()**: Transforma array en array de JSX  
✅ **key**: Propiedad única para optimización  
✅ **index**: Usar solo si no hay ID único  

---

### 6️⃣ Renderizado Condicional

```javascript
{task.editable ? <input /> : <strong>{task.text}</strong>}
```

✅ **Operador ternario**: `condición ? siVerdadero : siFalso`  
✅ **&&**: Para renderizar o no renderizar  
✅ **Uso**: Mostrar UI diferente según estado  

---

### 7️⃣ Inmutabilidad

```javascript
// ❌ MAL - Mutación directa
tasks[0] = newTask;
setTasks(tasks);

// ✅ BIEN - Crear copia
const newTasks = [...tasks];
newTasks[0] = newTask;
setTasks(newTasks);
```

✅ **Regla de oro**: Nunca mutar el estado directamente  
✅ **Spread operator**: `[...array]` para copiar arrays  
✅ **Razón**: React detecta cambios por referencia  

---

## 🎨 Guía Visual

### Flujo de Datos

```
┌─────────────────────────────────────────────────────────┐
│                      App.js                             │
│                                                         │
│  Estados:                                               │
│  ├─ tasks: [{text, date, editable}, ...]               │
│  ├─ input: ''                                           │
│  └─ date: ''                                            │
│                                                         │
│  Funciones:                                             │
│  ├─ handleAdd()                                         │
│  ├─ handleDelete(index)                                 │
│  ├─ handleToggleEdit(index)                             │
│  └─ handleUpdate(index, text, date)                     │
│                                                         │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ▼ Props
┌─────────────────────────────────────────────────────────┐
│                   TodoList.js                           │
│                                                         │
│  Recibe:                                                │
│  ├─ tasks (array)                                       │
│  ├─ onDelete (función)                                  │
│  ├─ onToggleEdit (función)                              │
│  └─ onUpdate (función)                                  │
│                                                         │
│  Renderiza:                                             │
│  └─ tasks.map() → <TodoItem />                          │
│                                                         │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ▼ Props
┌─────────────────────────────────────────────────────────┐
│                   TodoItem.js                           │
│                                                         │
│  Recibe:                                                │
│  ├─ task (objeto)                                       │
│  ├─ onDelete (función)                                  │
│  ├─ onToggleEdit (función)                              │
│  └─ onUpdate (función)                                  │
│                                                         │
│  Estados locales:                                       │
│  ├─ editedText                                          │
│  └─ editedDate                                          │
│                                                         │
│  Renderiza:                                             │
│  └─ Modo vista O Modo edición                           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Ciclo de Vida de una Tarea

```
1. CREAR
   Usuario escribe → input/date (estado) → Click "Agregar"
   → handleAdd() → setTasks([...tasks, newTask])
   → useEffect detecta cambio → localStorage.setItem()

2. EDITAR
   Click "Editar" → handleToggleEdit(index)
   → task.editable = true → Renderiza inputs
   → Usuario modifica → editedText/editedDate (estado local)
   → Click "Guardar" → handleUpdate(index, text, date)
   → setTasks() → useEffect → localStorage.setItem()

3. ELIMINAR
   Click "Eliminar" → handleDelete(index)
   → tasks.filter() → setTasks(newTasks)
   → useEffect → localStorage.setItem()
```

---

## ✅ Checklist de Requisitos de la Guía 07

### 📋 Objetivos del Laboratorio

- [x] ✅ Instalar y configurar proyecto React
- [x] ✅ Crear componentes funcionales con JavaScript
- [x] ✅ Capturar y almacenar información dinámica
- [x] ✅ Utilizar props para comunicación
- [x] ✅ Aplicar eventos de clic

### 💪 Capacidades

- [x] ✅ Comprender estructura básica de React
- [x] ✅ Usar JSX para crear componentes
- [x] ✅ Manejar estado con useState
- [x] ✅ Dividir aplicación en componentes hijos
- [x] ✅ Pasar datos mediante props
- [x] ✅ Manejar eventos de usuario

### 🚀 Ejercicios Prácticos

- [x] ✅ **Fechas para las tareas** - Implementado con input type="date"
- [x] ✅ **Opción de edición** - Implementado con modo editable
- [x] ✅ **Almacenamiento Local** - Implementado con useEffect + localStorage

---

## 🐛 Solución de Problemas

### ❌ Error: "npm not found"

**Causa**: Node.js no está instalado o no está en el PATH

**Solución**:
1. Instalar Node.js desde [nodejs.org](https://nodejs.org/)
2. Reiniciar la terminal
3. Verificar: `node --version`

---

### ❌ Error: "Port 3000 already in use"

**Causa**: Otro proceso está usando el puerto 3000

**Solución en Windows**:
```powershell
# Ver qué proceso usa el puerto 3000
netstat -ano | findstr :3000

# Matar el proceso (reemplaza <PID> con el número)
taskkill /PID <PID> /F
```

**O usar otro puerto**:
```bash
set PORT=3001 && npm start
```

---

### ❌ Las tareas no se guardan

**Causa**: localStorage deshabilitado o bloqueado

**Solución**:
1. Abrir DevTools (F12)
2. Ir a Application → Local Storage
3. Verificar que `http://localhost:3000` tenga el key `tasks`
4. Revisar consola por errores

---

### ❌ Error: "Module not found"

**Causa**: Dependencias no instaladas

**Solución**:
```bash
# Eliminar y reinstalar
rm -rf node_modules package-lock.json
npm install
```

---

### ❌ La página no se actualiza

**Causa**: Caché del navegador

**Solución**:
- Ctrl + Shift + R (recargar sin caché)
- O abrir en modo incógnito

---

## 📚 Recursos Adicionales

### Documentación Oficial
- 📖 [React Documentation](https://react.dev/) - Documentación oficial
- 📘 [React Tutorial](https://react.dev/learn) - Tutorial interactivo
- 🎣 [React Hooks](https://react.dev/reference/react) - Referencia de Hooks

### APIs Web
- 💾 [localStorage API](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- 🎯 [Event Reference](https://developer.mozilla.org/es/docs/Web/Events)

### JavaScript Moderno
- ⚡ [ES6 Features](https://developer.mozilla.org/es/docs/Web/JavaScript)
- 🔗 [Array Methods](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Herramientas
- 🛠️ [React DevTools](https://react.dev/learn/react-developer-tools)
- 📦 [npm Documentation](https://docs.npmjs.com/)

---

## 👨‍💻 Autor

**milith0kun**

- 🐙 GitHub: [@milith0kun](https://github.com/milith0kun)
- 📁 Repositorio: [FrontEnd2-](https://github.com/milith0kun/FrontEnd2-)
- 📧 Email: milith0kun@users.noreply.github.com

---

## 📄 Licencia

Este proyecto fue desarrollado con fines **educativos** para el curso de **Desarrollo de Software I** - Guía 07.

Se permite:
- ✅ Usar como referencia para aprendizaje
- ✅ Modificar y adaptar para proyectos personales
- ✅ Compartir con compañeros de clase

No se permite:
- ❌ Copiar sin entender para entregas académicas
- ❌ Uso comercial sin autorización

---

## 🙏 Agradecimientos

- 👨‍🏫 **Profesor del curso** - Por la guía y enseñanzas
- ⚛️ **Equipo de React** - Por la increíble biblioteca
- 📚 **Comunidad de desarrolladores** - Por recursos y tutoriales
- 💻 **Compañeros de clase** - Por el apoyo y colaboración

---

## 📞 Soporte

¿Tienes preguntas o encontraste un bug?

1. 🔍 Revisa la sección de [Solución de Problemas](#-solución-de-problemas)
2. 📖 Consulta [INSTRUCCIONES.md](./INSTRUCCIONES.md) para más detalles técnicos
3. 🐛 Abre un [Issue en GitHub](https://github.com/milith0kun/FrontEnd2-/issues)
4. 💬 Contacta al autor

---

## 🔄 Actualizaciones Futuras

Posibles mejoras para versiones futuras:

- [ ] Agregar filtros (todas/completadas/pendientes)
- [ ] Implementar drag & drop para reordenar
- [ ] Agregar categorías/etiquetas
- [ ] Modo oscuro
- [ ] Exportar/importar tareas (JSON)
- [ ] Sincronización con backend
- [ ] Notificaciones de tareas próximas
- [ ] Búsqueda de tareas
- [ ] Estadísticas y gráficos

---

<div align="center">

### ⭐ Si te gustó este proyecto, considera darle una estrella ⭐

---

**Hecho con ❤️, ☕ y React**

*Guía 07 - Desarrollo de Software I*

---

[![React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![MIT License](https://img.shields.io/badge/License-Educational-blue?style=flat-square)](LICENSE)

</div>
