import React, { useState } from 'react'
//import Status from './Status'
import StatusWithHooks from './StatusWithHooks'
//import icon from "./../../../assets/item-icon.png"
import './Profile-info.css'
import { FaCamera } from "react-icons/fa";



export const ProfileInfo = (props) => {

    //let [editValue, editing] = useState(false)


    if (!props.profile) {
        return <div>wait...</div>
    }


    return (
        <div className = 'main-block-profile-info'>
            {/* {   
                editValue 
                    ? <ProfileDataForm />
                    : <ProfileData editProfile = {() => {editing(true)}} savePhoto = {props.savePhoto} profile = {props.profile} isOwner = {props.isOwner} status = {props.status} updateStatus = {props.updateStatus} /> 
            } */}
            <ProfileData updateStatus = {props.updateStatus} savePhoto = {props.savePhoto} profile = {props.profile} isOwner = {props.isOwner} status = {props.status}/>
        </div>
    ) 




}
        
    

    export const ProfileData = (props) => {


        const mainPhotoSelected = (e) => {
            if (e.target.files.length) {
                props.savePhoto(e.target.files[0])
            }
        }


        return (
            <div className = 'main-profile-info-block'>
                <div className = 'main-profile-photo'>
                    <img alt = '' src={props.profile.photos.large} className = 'image-icon-profile' />
                    {props.isOwner &&   <><input className = 'choose-button' onChange = {mainPhotoSelected} type = 'file' id = 'file-input' />
                                        <label for = 'file-input' className = 'real-choose-button'><FaCamera className = 'fa-camera' /></label></>}
                </div>
                <div className = 'main-profile-information'>
                    <div className = 'full-name-block'>
                        Full name:     <span className = 'full-name'>{props.profile.fullName}</span>
                    </div> 
                    <div className = 'about-me-block'>
                        About me:      <span className = 'about-me'>{props.profile.aboutMe}</span>  
                    </div>
                    <div className = 'looking-for-a-job-block'>
                        Looking for:   <span className = 'looking-for-a-job'>{props.lookingForAJobDescription ? 'yes' : 'no'}</span>   
                    </div>
                    <div className = 'profile-contacts-block'>
                        {Object.keys(props.profile.contacts).map(key => { return <Contact key = {key} contactTitle = {key} contactValue = {props.profile.contacts[key]}/> })}
                    </div>
                    
                </div>
                    <div>
                        <StatusWithHooks  status = {props.status} updateStatus = {props.updateStatus} />
                    </div>
            </div>
        
        ) 
    }

    
    
    
    
    
    
    
    
    
    
    export const Contact = ({contactTitle, contactValue}) => {
        return (
            <div className = 'contact-key'> {contactTitle}: {contactValue} </div>
        )
    }










    
