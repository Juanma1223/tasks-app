import React, { useState } from 'react'
import '../css/TasksList.css'
import Task from './Task'

const TasksList = ({ list, updateList }) => {

    console.log("list",list)

    // States
    const [listTasks, setListTasks] = useState(list.tasks)
    const [editing, setEditing] = useState(false);
    const [listName, setListName] = useState(list.name);


    // Functions
    const addTask = () => {
        const newTask = {
            id: listTasks.length+1,
            name: "Nueva tarea"
        }
        setListTasks(
            [...listTasks, newTask]
        )
    }


    const startEditing = () => {
        setEditing(true);
    }

    const finishEditing = () => {
        setEditing(false);
        updateList(list.id, listName)
    }

    const editTask = (updatedTask) => {
        console.log("updatedTask",updatedTask)
        setListTasks(listTasks.map((task) => {
            if(task.id === updatedTask.id){
                return updatedTask
            }else{
                return task
            }
        }))
    }

    return (
        <div className='tasksList'>
            <h2 onClick={startEditing} onBlur={finishEditing}>
                {editing ? <input className='listNameInput' type="text" value={listName} onChange={(e) => setListName(e.target.value)}></input> : list.name}
            </h2>
            <div>
                {listTasks.map((task) => {
                    return (
                        <Task editTask={editTask} task={task} />
                    )
                })}
            </div>
            <button className='btn' onClick={addTask}>Nueva tarea</button>
        </div>
    )
}

export default TasksList