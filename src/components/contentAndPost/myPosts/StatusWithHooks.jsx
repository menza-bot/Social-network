import React, { useState } from 'react' 
import { useEffect } from 'react'

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
                    <span onDoubleClick = {activateEditing}>Status:{ props.status}</span>
                </div>
                }    
                {editMode && <div>
                    <input onChange = {onStatusChange} onBlur = {deActivateEditing} autoFocus = 'true' value = {status}/>
                </div>}
            </div>

    )
    
}

export default StatusWithHooks