# 📝 Instrucciones del Proyecto - To-Do List App

## 🎯 Guía 07 - Desarrollo de Software I

### 👨‍💻 Estudiante
- **Repository**: [FrontEnd2-](https://github.com/milith0kun/FrontEnd2-.git)
- **Autor**: milith0kun

---

## ✨ Funcionalidades Implementadas

### ✅ 1. Fechas para las tareas
- **Descripción**: Cada tarea incluye un campo de fecha que se puede asignar al crearla
- **Implementación**: 
  - Input type="date" en `App.js`
  - Fecha automática si no se selecciona (fecha actual)
  - Almacenamiento en el estado del componente
  
### ✅ 2. Opción de edición
- **Descripción**: Posibilidad de editar tanto el texto como la fecha de las tareas existentes
- **Implementación**:
  - Estado `editable` en cada tarea
  - Función `handleToggleEdit` para activar/desactivar modo edición
  - Función `handleUpdate` para guardar cambios
  - Renderizado condicional en `TodoItem.js`

### ✅ 3. Almacenamiento Local
- **Descripción**: Las tareas persisten en el navegador usando localStorage
- **Implementación**:
  - `useEffect` para cargar tareas al iniciar
  - `useEffect` para guardar automáticamente en cada cambio
  - `localStorage.getItem('tasks')` y `localStorage.setItem('tasks', ...)`

---

## 🚀 Comandos para ejecutar

```bash
# Clonar el repositorio
git clone https://github.com/milith0kun/FrontEnd2-.git
cd FrontEnd2-

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm start

# Compilar para producción
npm run build
```

---

## 📂 Estructura de Archivos

```
src/
├── App.js              # Componente principal
│   ├── useState para tasks, input, date
│   ├── useEffect para localStorage (carga)
│   ├── useEffect para localStorage (guarda)
│   ├── handleAdd()
│   ├── handleDelete(index)
│   ├── handleToggleEdit(index)
│   └── handleUpdate(index, text, date)
│
├── TodoList.js         # Lista de tareas
│   └── Mapea tasks y renderiza TodoItem
│
├── TodoItem.js         # Item individual
│   ├── Modo vista (muestra texto y fecha)
│   ├── Modo edición (inputs editables)
│   ├── useState para editedText y editedDate
│   └── Botones: Editar, Guardar, Eliminar
│
├── App.css            # Estilos del contenedor principal
├── TodoItem.css       # Estilos de cada tarea
├── index.css          # Estilos globales
└── index.js           # Punto de entrada React
```

---

## 🧠 Conceptos de React Utilizados

### Hooks
- **useState**: Manejo de estado en componentes funcionales
- **useEffect**: Efectos secundarios y sincronización con localStorage

### Props
- Paso de datos de padre a hijo
- Paso de funciones como callbacks
- Comunicación entre componentes

### Eventos
- `onClick`: Manejo de clics en botones
- `onChange`: Captura de cambios en inputs
- `onKeyPress`: Detectar tecla Enter

### Renderizado
- Condicional: Operador ternario `? :`
- Listas: Método `.map()` con key
- Fragmentos: `<>...</>`

### Manejo de Arrays
- `.map()`: Renderizar listas
- `.filter()`: Eliminar elementos
- Spread operator `[...array]`: Copiar arrays

---

## 📊 Flujo de Datos

```
App.js (Estado Global)
  │
  ├─► tasks (array de objetos)
  │     │
  │     ├─► text: string
  │     ├─► date: string
  │     └─► editable: boolean
  │
  ├─► input (string temporal)
  └─► date (string temporal)

localStorage ◄──► useEffect ◄──► tasks
```

---

## 🎨 Características de Diseño

- **Responsive**: Funciona en móvil y desktop
- **Gradiente moderno**: Fondo degradado morado
- **Animaciones**: Transiciones suaves en hover
- **Iconos**: Uso de emojis para mejorar UX
- **Cards elevadas**: Box-shadow para profundidad

---

## 🔧 Tecnologías Utilizadas

- **React 18.2.0**: Librería principal
- **React Scripts 5.0.1**: Configuración de Webpack
- **CSS3**: Estilos y animaciones
- **localStorage API**: Persistencia de datos
- **Node.js**: Entorno de desarrollo

---

## 📝 Notas Importantes

1. **localStorage**: Los datos se guardan en el navegador del usuario
2. **Sin backend**: No requiere servidor, es una aplicación completamente frontend
3. **Persistencia local**: Los datos no se sincronizan entre dispositivos
4. **Límite de localStorage**: Aproximadamente 5-10 MB según el navegador

---

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
# Limpiar caché de npm
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Las tareas no se guardan
- Verificar que localStorage esté habilitado en el navegador
- Revisar la consola del navegador (F12) para errores
- Probar en modo incógnito

### Error de compilación
- Verificar que Node.js esté instalado (v14 o superior)
- Revisar que todos los imports sean correctos
- Verificar que no haya errores de sintaxis

---

## 📚 Referencias

- [Documentación de React](https://react.dev/)
- [localStorage MDN](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [React Hooks](https://react.dev/reference/react)

---

## 🎓 Objetivos de Aprendizaje Cumplidos

✅ Instalar y configurar un proyecto básico en React  
✅ Crear componentes funcionales utilizando funciones de JavaScript  
✅ Capturar y almacenar información del usuario de forma dinámica  
✅ Utilizar props para comunicación entre componentes  
✅ Aplicar eventos de clic para interactuar con la lista  
✅ Comprender la estructura básica de una aplicación en React  
✅ Usar JSX para crear componentes  
✅ Manejar el estado de un componente usando useState  
✅ Dividir una aplicación en componentes hijos  
✅ Pasar datos mediante props  
✅ Manejar eventos de usuario como completar o eliminar tareas  

---

**Proyecto desarrollado para la Guía 07 - Desarrollo de Software I**
