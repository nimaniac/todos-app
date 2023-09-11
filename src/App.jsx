import { Paper, ThemeProvider, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import ToDoForm from './components/ToDoForm'
import ToDosList from './components/ToDosList'
import { paperStyles } from './custom-mui-styles'
// import theme from './theme/theme'

const App = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const [error, setError] = useState('');

  const addTaskHandler = (event) => {
    event.preventDefault();


    if (editId) {
      const editTask = todos.find((task) => task.id === editId);
      const updatedTodos = todos.map((task) =>
        task.id === editTask.id ? (task = { id: task.id, todo }) : { id: task.id, todo: task.todo }
      )
      setTodos(updatedTodos);
      setEditId(0);
      setTodo('');
      return;
    }

    if (todo.length > 30) {
      setError('only 30 characters allowed!!!');
      return;
    } else {
      setError('')
    }

    if (todo !== "") {
      setTodos([{ id: todo, todo }, ...todos]);
      setTodo("");
    }

  }

  const deleteHandler = (id) => {
    const updatedTodos = todos.filter((task) => task.id !== id);
    setTodos(updatedTodos);
  }

  const editHandler = (id) => {
    const editedTask = todos.find((task) => task.id === id);
    setTodo(editedTask.todo)
    setEditId(id);
  }

  return (

      <div>
        <Paper
          elevation={20}
          sx={{
            ...paperStyles,
            width: matches ? '100vw' : '65vw'
          }}
        >
          <div className='title'>
            <h1>todos list app</h1>
          </div>
          <ToDoForm
            todo={todo}
            setTodo={setTodo}
            addTaskHandler={addTaskHandler}
            errorState={error}
            matches={matches}
          />
          <ToDosList
            todos={todos}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        </Paper>
      </div>

  )
}

export default App
