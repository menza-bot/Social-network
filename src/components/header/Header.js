import React from "react"
import './../../styles/Header.css'
import { Fa500Px } from 'react-icons/fa'
import { IconContext } from "react-icons";




export default function Header() {
    return (
        <div className="header">
            <IconContext.Provider value = {{className: 'github', size: '35px'}}>
                <div><Fa500Px /></div>
            </IconContext.Provider>
        </div>
    )
}