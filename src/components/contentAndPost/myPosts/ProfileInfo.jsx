import React from 'react'
//import Status from './Status'
import StatusWithHooks from './StatusWithHooks';





const ProfileInfo = (props) => {
    
    
    if (!props.profile) {
        return <div>wait</div>

    }   

    return (
        <div>
            <div><img alt = '' src={props.profile.photos.small}/></div>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <StatusWithHooks  status = {props.status} updateStatus = {props.updateStatus} />
        </div>
    ) 

    

    
}


export default ProfileInfo 