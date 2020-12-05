import React from "react"
import { Route, withRouter } from "react-router-dom"
import './../../styles/Content.css'
import Music from './music/Music'
import Settings from './settings/Settings'
import Findsomeone from './findSomeone/findSomeone'
import Login from './../Login/Login'
import {LogoutThunkCreator, setUserData} from './../../redux/auth-reducer'
//import {authAPI} from '../api/api'
import {initializeContent} from '../../redux/component-reducer'
import { connect } from 'react-redux'
import { compose } from 'redux'

const ProfileContainer = React.lazy(() => import('./myPosts/ProfileContainer'))
const News = React.lazy(() => import('./news/News'))



class Content extends React.Component {

    componentDidMount() {
        this.props.initializeContent()
    } 
    
    render() {

        {   
            if (!this.props.initialized) {
                return <div>watiting</div>
            }
        }
        return (
            <div className="content">
            <Route exact path = '/' render = {() => <React.Suspense fallback = {<div>Loading...</div>}><ProfileContainer /></React.Suspense>} />
            <Route path = '/profile/:userId?' render = {() => <React.Suspense fallback = {<div>Loading...</div>}><ProfileContainer /></React.Suspense>} />
            {/*<Route path = '/dialogs' render = {() => <Dialog />} />*/}    
            <Route path = '/news' render = {()=> <React.Suspense><News/></React.Suspense> } />
            <Route path = '/music' component = {Music} />
            <Route path = '/settings' component = {Settings} />
            <Route path = '/findSomeone' render = {() => <Findsomeone />} />
            <Route path = '/login' render = {() => <Login />} /> 
            {/* <Route path = '*' render = {() => {return <div>404 NOT FOUND</div>}} /> */}
            </div>
        )
    }
    //need to make put this component (Loginreduxfrom) to Login.js file
}

const mapStateToProps = (state) => ({
    initialized: state.content.initialized
})


export default compose(
    withRouter,
    connect 
    (
        mapStateToProps, { setUserData: setUserData,
                initializeContent: initializeContent, 
                LogoutThunkCreator: LogoutThunkCreator}
    )
    
    ) (Content)
