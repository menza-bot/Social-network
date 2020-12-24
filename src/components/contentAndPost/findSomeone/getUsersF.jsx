//import * as axios from 'axios'
import React from 'react' 
import { NavLink } from 'react-router-dom'
//import '../../../assets/images'
import user from './../../../assets/user.png'
import './getUsers.css'

    
    
    export default function GetUsersF(props) {


        let pageCount = Math.ceil(props.totalUsersCount / props.pageSize) 
        
        let pages = []

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i) // this is what to make it to push into the array  
        }

        
        
        return (
        
        <div className="wrapper"> 
            
            
            {
            props.users.map(u => 
                <div className = 'user-block' key = {u.id}>
                    <span>
                        <img src= {  user ||  u.photos.small } alt="" className = 'image-icon-users'/>
                    </span>
                    <span>
                        <NavLink to = {'/profile/' + u.id}>
                            <span className = 'user-name'>
                                {u.name}
                            </span>
                            <img src="" alt=""/>
                        </NavLink>
                    </span>
                    <span>
                        {
                            u.followed 
                            ? <button  className = 'unfollow-button' onClick = {() => {
                                props.unfollowAcceptThunkCreator(u.id)
                            }}>unfollow</button>
                            
                            
                            : 
                            
                            
                            <button  className = 'follow-button' onClick = {() => {
                                props.followAcceptThunkCreator(u.id)
                            }}>follow</button>
                        }
                    </span> 
                </div>
                )
            }

            <span className = 'pagination'>
                <div>
                    {pages.map( item => { return <span className = 'pagination-item' onClick = {(e) => {props.onPageChanged(item)}}>{item}</span>})}
                </div>
            </span>

        </div>)
    
    }


