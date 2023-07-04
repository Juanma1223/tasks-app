import React from 'react'
import '../css/TasksList.css'
import Task from './Task'

const TasksList = ({ list }) => {
    return (
        <div className='tasksList'>
            <h1>
                {list.name}
            </h1>
            <div>
                {list.tasks.map((task) => {
                    return (
                        <Task task={task} />
                    )
                })}
            </div>
        </div>
    )
}

export default TasksList