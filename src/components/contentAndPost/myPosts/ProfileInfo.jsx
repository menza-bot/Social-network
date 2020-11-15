import React from 'react'
import Status from './Status'





const ProfileInfo = (props) => {
    
    
    if (!props.profile) {
        return <div>wait</div>
    }   

    return (
        <div>
            <div><img alt = '' src={props.profile.photos.small}/></div>  
            <Status status = {props.status} updateStatus = {props.updateStatus}/>
        </div>
    ) 

    

    
}


export default ProfileInfo 