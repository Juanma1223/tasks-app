import React, { useState } from 'react'
import '../css/Task.css'

const Task = ({ task }) => {

    const [taskName, setTaskName] = useState(task.name);

    return (
        <div className='task'>{task.name}</div>
    )
}

export default Task