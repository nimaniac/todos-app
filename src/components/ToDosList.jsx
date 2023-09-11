import { Button } from '@mui/material'
import classes from './ToDosList.module.css'
import React from 'react'
import { styles } from '../custom-mui-styles'

const ToDosList = ({ todos, deleteHandler, editHandler }) => {
  return (
    <>
      <div className={classes['todos-container']}>
        {
          todos.length > 0 ?
            todos.map((task, index) => (
              <div className={classes['main-wrapper']} key={index}>
                <div className={classes['task-wrapper']}>
                  <h2>
                    {
                      task.todo
                    }
                  </h2>
                  <div className={classes['buttons-wrapper']}>
                    <Button
                      sx={styles.buttonStyles}
                      variant='contained' color='secondary' size='medium'
                      onClick={() => editHandler(task.id)}>
                      Edit
                    </Button>
                    <Button
                      sx={styles.buttonStyles}
                      variant='contained' color='secondary' size='medium'
                      onClick={() => deleteHandler(task.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            )
            )
            :
            <h1 className={classes['no-task-message']}> you're all done!!! </h1>
        }
      </div>

    </>

  )
}

export default ToDosList