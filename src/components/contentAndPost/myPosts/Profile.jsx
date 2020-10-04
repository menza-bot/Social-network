import React from "react"
import './Profile.css'
import PostAdder from './PostAdder'


export default function Profile(props) {
    
    
    
    
    return(
        <div className="main">
            <div className="profile">Profile</div>
            <PostAdder state = {props.state} newPostText = {props.state.newPostText} dispatch = {props.dispatch}/>
        </div>
    )
}

