import React, { useContext } from "react";
import {ThemeContext} from './ThemeContext'
export default function Body() {

    const {color, toggleTheme} = useContext(ThemeContext)

    return (
        <header className={`${color}-body`}>
            <h1>Click the button to toggle the {color} Theme!</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    )
}