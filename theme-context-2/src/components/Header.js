import React, { useContext } from "react";
import {ThemeContext} from './ThemeContext'
export default function Header() {
    const {color} = useContext(ThemeContext)
    return (
        <div className={`${color}-header`}>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact</h1>
        </div>
    )
}