import * as axios from 'axios'
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
                                //props.toggleIsFollowing(true)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '694b4ab8-8917-48c6-9edf-af5966ffc44a'
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(u.id)
                                    }
                                    //props.toggleIsFollowing(false)
                                }) 
                                //props.unFollow(u.id)
                            
                            }}>unfollow</button>
                            
                            
                            : 
                            
                            
                            <button onClick = {() => {
                                //props.toggleIsFollowing(true)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '694b4ab8-8917-48c6-9edf-af5966ffc44a'
                                        
                                }
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                //props.toggleIsFollowing(false)

                            }) 
                            //props.follow(u.id)
                            }}>follow</button>
                        }
                    </div> 
                </div>
                )
            }
        </div>)
    
    }


