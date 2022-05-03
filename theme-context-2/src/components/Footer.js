import React, { useContext } from "react";
import {ThemeContext} from './ThemeContext'

export default function Footer() {
    const {color} = useContext(ThemeContext)
    return (
        <div className={`${color}-footer`}>
            <h1>Project created by Matthew Wardlow</h1>
        </div>
    )
}