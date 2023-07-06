import React, { useState } from 'react'
import TasksList from './TasksList'
import '../css/ListsContainer.css'

const ListsContainer = () => {

    const [lists, setLists] = useState([
        {
            name: "TO DO",
            tasks: [
                {
                    id: 1,
                    name: "Hacer el css"
                },
                {
                    id: 2,
                    name: "Terminar los componentes"
                }
            ]
        },
        {
            name: "In Progress",
            tasks: [
                {
                    id:3,
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