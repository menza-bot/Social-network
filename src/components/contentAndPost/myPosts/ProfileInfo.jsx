import React from 'react'
//import Status from './Status'
import StatusWithHooks from './StatusWithHooks';
import icon from "./../../../assets/item-icon.png"
import './Profile-info.css'



const ProfileInfo = (props) => {
    
    
    if (!props.profile) {
        return <div>wait</div>
        

    }
    
    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
            
        }
    }



    return (
        <div>
            <div>
                <img alt = '' src={props.profile.photos.small } className = 'image-icon-profile' />
                {props.isOwner && <input onChange = {mainPhotoSelected} type = 'file'/>}
            </div>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <StatusWithHooks  status = {props.status} updateStatus = {props.updateStatus} />

        </div>
        
    ) 

    

    
    }

export default ProfileInfo 