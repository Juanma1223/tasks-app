import React, { useState } from 'react'
import '../css/Task.css'
import { FaTrashAlt } from 'react-icons/fa';

const Task = ({ task, editTask }) => {

    console.log("taskInicial",task);

    const [taskName, setTaskName] = useState(task.name);
    const [editing, setEditing] = useState(false)

    const startEditing = () => setEditing(true);
    const stopEditing = () => setEditing(false);

    const updateTask = () => {
        console.log("task",task)
        editTask({
            id: task.id,
            name: taskName
        })
    }

    return (
        <div className='task' onClick={startEditing} onBlur={stopEditing}>
            {editing ? <input onBlur={updateTask} className='taskNameInput' value={taskName} onChange={(e) => setTaskName(e.target.value)}></input> : task.name}
            <FaTrashAlt className='deleteButton' />
        </div>
    )
}

export default Task