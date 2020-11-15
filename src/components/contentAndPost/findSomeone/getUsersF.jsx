//import * as axios from 'axios'
import React from 'react' 
import { NavLink } from 'react-router-dom'




    
    
    export default function GetUsersF(props) {
        
        let pageCount = Math.ceil(props.state.usersPage.totalUsersCount / props.state.usersPage.pageSize) 

        let pages = []

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i) // this is what to make it to push into the array  
        }

        //console.log(pages);
        
        return (
        
        <div className="wrapper"> 
            
            <span>
                <div>
                    {pages.map( item => <span onClick = {(e) => {props.onPageChanged(item)}}>{item}</span>)}
                </div>
            </span>
            
            {
            props.state.usersPage.users.map(u => 
                <div key = {u.id}>
                    <div>
                        <NavLink to = {'/profile/' + u.id}><div>{u.name}</div></NavLink>
                    </div>
                    <div>
                        {
                            u.followed 
                            ? <button  onClick = {() => {
                                props.unfollowAcceptThunkCreator(u.id)
                            }}>unfollow</button>
                            
                            
                            : 
                            
                            
                            <button onClick = {() => {
                                props.followAcceptThunkCreator(u.id)
                            }}>follow</button>
                        }
                    </div> 
                </div>
                )
            }
        </div>)
    
    }


