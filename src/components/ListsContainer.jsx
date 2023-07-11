import React, { useState } from 'react'
import TasksList from './TasksList'
import '../css/ListsContainer.css'

const ListsContainer = () => {

    const [lists, setLists] = useState([
        {
            id: 1,
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
            id: 2,
            name: "In Progress",
            tasks: [
                {
                    id: 3,
                    name: "Arrancar los componentes"
                }
            ]
        },
        {
            id: 3,
            name: "Done",
            tasks: []
        }
    ])

    const updateList = (listId, newName) => {
        setLists(lists.map((list) => {
            if(list.id == listId){
                return {...list,name:newName}
            }else{
                return list
            }
        }))
    }

    const addList = () => {
        setLists(
            [...lists, { id: lists.length + 1, name: "Nueva lista", tasks: [] }]
        )
    }

    return (
        <div className="listsContainer">
            {lists.map((list) => {
                return (
                    <TasksList updateList={updateList} list={list} />
                )
            })}
            <button className='addListBtn' onClick={addList}>+ Add list</button>
        </div>
    )
}

export default ListsContainer