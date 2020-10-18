import React from 'react'
//import { NavLink } from 'react-router-dom'
import './Dialog.css'
import DialogListContainer from './DialogListContainer'




//let listOfNamesMapped = listOfNamesData.map((item, key) => {
 //       return <li key = {item.id}>{item.name}</li>
//})


export default function Dialogs() {
    
    
    

    return(
        <div className="dialog">
            <header className ="head">Messages</header>
            <div className="body-of-dialog">
                <div className="list-of-names">
                    <DialogListContainer />
                </div>
                <div className="messages-of-names">
                    <div className = 'nothing'>Nothing is here yet...</div>
                </div>
            </div>
        </div>
    )
}