import React, {useState} from "react";

export default function ListGen(props) {
    const [editI,setEditI] = useState({
        description: "",
        title: ""
    })

    const [toggle, setToggle] = useState(false)
    const [targetI, setTargetI] = useState(0)
    function toggleEdit(e) {
        setTargetI(e.target.parentElement.parentElement.id)
        setToggle(!toggle)
    }

    const handleChangeEdit = (e) => {
        const {name, value} = e.target
        setEditI(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div id={props.id}>
            <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <img alt="" src={props.imgUrl}></img>
            </div>
            <div>
                <button onClick={toggleEdit}>Edit</button>
                <button onClick={() => props.handleSave(props.id, editI)}>save</button>
                <button onClick={() => props.deleteButton(props.id)}>Delete</button>
            </div>
            <div className="editInput">
            <input id="edit" className={toggle && props.id === targetI ? "active" : null} name="title" onChange={handleChangeEdit} value={editI.title}></input>
            <input id="edit" className={toggle && props.id === targetI ? "active" : null} name="description" onChange={handleChangeEdit} value={editI.description}></input>
            </div>
        </div>
    )
}