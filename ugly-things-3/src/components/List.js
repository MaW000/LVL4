import React, { useContext } from "react";
import ListGen from './ListGen';
import { ListContext } from "./ListContext";
export default function List() {
    const { deleteButton, toggle, targetId, toggleClass, handleSave, thingsArray,  } = useContext(ListContext)
    
    const mappedThings = thingsArray.map(thing => {
        return (
            <ListGen 
                title = {thing.title}
                imgUrl = {thing.imgUrl}
                description = {thing.description}
                id = {thing._id}
                key = {thing._id}
                deleteButton = {deleteButton}
                toggle = {toggle}
                targetId = {targetId}
                toggleClass = {toggleClass}
                handleSave = {handleSave}
            />
        )
    }) 
    
    return (
        <div>
            {mappedThings}
        </div>
    )
}