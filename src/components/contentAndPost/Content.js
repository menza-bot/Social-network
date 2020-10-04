import React from "react"
import { Route } from "react-router-dom"
import './../../styles/Content.css'
import Profile from './myPosts/Profile'
import Dialog from './../dialogs/Dialog'
import News from './../news/News'
import Music from './../music/Music'
import Settings from './../settings/Settings'




export default function Content(props) {
    console.log(props.state);
    
    return (
        <div className="content">
            <Route path = '/profile' render = {() => <Profile state = {props.state} newPostText = {props.state.newPostText} dispatch = {props.dispatch}/>} />
            <Route path = '/dialogs' render = {() => <Dialog state = {props.state}/>} />
            <Route path = '/news' component = {News} />
            <Route path = '/music' component = {Music} />
            <Route path = '/settings' component = {Settings} />
        </div>
    )
}