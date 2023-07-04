import React from 'react'
import '../css/Task.css'

const Task = ({ task }) => {
    return (
        <div className='task'>{task.name}</div>
    )
}

export default Task