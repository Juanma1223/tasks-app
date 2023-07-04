import React, { useState } from 'react'
import TasksList from './TasksList'
import '../css/ListsContainer.css'

const ListsContainer = () => {

    const [lists, setLists] = useState([
        {
            name: "TO DO",
            tasks: [
                {
                    name: "Hacer el css"
                },
                {
                    name: "Terminar los componentes"
                }
            ]
        },
        {
            name: "In Progress",
            tasks: [
                {
                    name: "Arrancar los componentes"
                }
            ]
        },
        {
            name: "Done",
            tasks: []
        }
    ])

    return (
        <div className="listsContainer">
            {lists.map((list) => {
                return (
                    <TasksList list={list} />
                )
            })}
        </div>
    )
}

export default ListsContainer