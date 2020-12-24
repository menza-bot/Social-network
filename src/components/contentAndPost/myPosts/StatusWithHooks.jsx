import React, { useState } from 'react' 
import { useEffect } from 'react'
import './StatusWithHooks.css'


const StatusWithHooks = (props) => {



    //let stateWithSetState = useState(true)
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {setStatus(props.status)}, [props.status])
    
    const activateEditing = () => {
        setEditMode(true)
    }

    const deActivateEditing = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value) 
    }
    
    
    return (
            <div>
                {!editMode &&
                <div>
                    <div onDoubleClick = {activateEditing}><span className = 'status-main-block' >{props.status}</span></div>
                </div>
                }    
                {editMode && <div>
                    <input onChange = {onStatusChange} onBlur = {deActivateEditing} autoFocus = 'true' value = {status}/>
                </div>}
            </div>

    )
    
}

export default StatusWithHooks