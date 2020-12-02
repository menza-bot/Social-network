import React from "react"
import './Profile.css'
//import PostAdder from './PostAdder'
import PostAdderContainer from "./PostAdderContainer"
import ProfileInfo from './ProfileInfo'


export default function Profile(props) {
    return (
        <div className="main">
            <div className="profile">Profile</div>
            <ProfileInfo savePhoto = {props.savePhoto} isOwner = {props.isOwner} profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus} />
            <PostAdderContainer />
    
        </div>
    )
}

