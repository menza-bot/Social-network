import React from "react"
import { Route } from "react-router-dom"
import './../../styles/Content.css'
import ProfileContainer from './myPosts/ProfileContainer'
//import Dialog from './dialogs/Dialog'
import News from './news/News'
import Music from './music/Music'
import Settings from './settings/Settings'
import Findsomeone from './findSomeone/findSomeone'




export default function Content() {
    
    return (
        <div className="content">
            <Route path = '/profile/:userId?' render = {() => <ProfileContainer />} />
            {/*<Route path = '/dialogs' render = {() => <Dialog />} />*/}    
            <Route path = '/news' component = {News} />
            <Route path = '/music' component = {Music} />
            <Route path = '/settings' component = {Settings} />
            <Route path = '/findSomeone' render = {() => <Findsomeone />} />
        </div>
    )
}