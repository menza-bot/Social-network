import React from 'react'
//import { NavLink } from 'react-router-dom'
import './Dialog.css'




//let listOfNamesMapped = listOfNamesData.map((item, key) => {
 //       return <li key = {item.id}>{item.name}</li>
//})


export default function Dialogs(props) {
    console.log(props.state.listOfNamesData[0]);
    
    let listOfNamesMapped = props.state.listOfNamesData.map((item, key) => {
        return <li key = {item.id}>{item.name}</li>
    })

    return(
        <div className="dialog">
            <header className ="head">Messages</header>
            <div className="body-of-dialog">
                <div className="list-of-names">
                    <div>{listOfNamesMapped}</div>
                </div>
                <div className="messages-of-names">
                    <div className = 'nothing'>Nothing is here yet...</div>
                </div>
            </div>
        </div>
    )
}