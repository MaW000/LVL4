import React from "react";
import { HexColorPicker as Picker } from 'react-colorful';

export default function InputRow(props) {
    return (
        <div className='input-row' id={props.id}>
          <h3>Color {props.id}</h3>
          <h3>{props.color}</h3>
          <button style={{background: props.color}} onClick={props.togglePicker}></button>
          <div className={props.toggle && props.id === props.x ? "picker" : "pickerHidden"}><Picker onChange={props.changeColor}/></div>
          
        </div>
    )
}