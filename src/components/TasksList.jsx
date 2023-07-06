import React, { useState } from 'react'
import '../css/TasksList.css'
import Task from './Task'

const TasksList = ({ list }) => {

    // States
    const [listTasks, setListTasks] = useState(list.tasks)

    // Functions
    const addTask = () => {
        const newTask = {
            id: listTasks[listTasks.length - 1],
            name: "Nueva tarea"
        }
        setListTasks(
            [...listTasks, newTask]
        )
    }

    const editTask = (updatedTask) => {
        
    }

    return (
        <div className='tasksList'>
            <h2>
                {list.name}
            </h2>
            <div>
                {listTasks.map((task) => {
                    return (
                        <Task task={task} />
                    )
                })}
            </div>
            <button className='btn' onClick={addTask}>Nueva tarea</button>
        </div>
    )
}

export default TasksList