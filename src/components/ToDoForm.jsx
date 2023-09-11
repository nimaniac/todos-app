import { TextField, Button } from '@mui/material'
import classes from './ToDoForm.module.css'
import React from 'react'
import { styles } from '../custom-mui-styles'

const ToDoForm = ({ errorState,todo, setTodo, addTaskHandler, matches }) => {


    return (
        <form onSubmit={addTaskHandler}>
            <div className={classes['form-wrapper-1']}>
                <div className={classes['form-wrapper-2']}>
                    <TextField
                        helperText={errorState}
                        sx={{...styles.textFieldStyles, 
                        width: matches ? 200 : 250
                        }}
                        type='text'
                        variant='outlined'
                        label='new task'
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <Button
                        sx={styles.buttonStyles}
                        variant='contained'
                        color='secondary'
                        type='submit'
                        size='large'
                    >
                        Add
                    </Button>
                </div>
            </div>

        </form>
    )
}

export default ToDoForm