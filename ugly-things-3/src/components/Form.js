import React, { useContext } from "react";
import { ListContext } from "./ListContext";
export default function Form() {
    const { handleChangeInputs, saveinput, inputs } = useContext(ListContext)
    
    return (
        <div className="form">
            <div className="form-input">
                <input onChange={handleChangeInputs} name='title' placeholder="Title" value={inputs.form.title}></input>
                <input name='imgUrl' onChange={handleChangeInputs} placeholder="Img URL" value={inputs.form.imgUrl}></input>
                <input name='description' onChange={handleChangeInputs} placeholder="Description" value={inputs.form.description}></input>
            </div>
            <button onClick={saveinput} className="form-button">Submit</button>
        </div>
    )
}