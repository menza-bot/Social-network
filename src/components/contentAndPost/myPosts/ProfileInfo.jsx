import React, { useState } from 'react'
//import Status from './Status'
import StatusWithHooks from './StatusWithHooks';
import icon from "./../../../assets/item-icon.png"
import './Profile-info.css'



export const ProfileInfo = (props) => {

    let [editValue, editing] = useState(false)


    if (!props.profile) {
        return <div>wait...</div>
    }


    return (
        <div className = 'main-block'>
            {   
                editValue 
                    ? <ProfileDataForm />
                    : <ProfileData editProfile = {() => {editing(true)}} savePhoto = {props.savePhoto} profile = {props.profile} isOwner = {props.isOwner} status = {props.status} updateStatus = {props.updateStatus} /> 
            }
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
            <div className = 'main-block'>
                <div>
                    <img alt = '' src={props.profile.photos.small } className = 'image-icon-profile' />
                    {props.isOwner && <input onChange = {mainPhotoSelected} type = 'file'/>}
                </div>
                
                <button onClick = {props.editProfile}>Tap here</button>

                <div>
                    Full name: {props.profile.fullName}
                </div>
                <div>
                    About me: {props.profile.aboutMe}
                </div>
                <div>
                    Looking for a job: {props.lookingForAJobDescription ? 'yes' : 'no'}
                </div>
                <div>
                    {Object.keys(props.profile.contacts).map(key => { return <Contact key = {key} contactTitle = {key} contactValue = {props.profile.contacts[key]}/> })}
                </div>
                <div>
                    <StatusWithHooks  status = {props.status} updateStatus = {props.updateStatus} />
                </div>
            </div>
        
        ) 
    }

    
    
    export const ProfileDataForm = () => {
        return (
            <form action="">
                this is form for edit your profile
            </form>
        )
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    export const Contact = ({contactTitle, contactValue}) => {
        return (
            <div> {contactTitle}: {contactValue} </div>
        )
    }










    
