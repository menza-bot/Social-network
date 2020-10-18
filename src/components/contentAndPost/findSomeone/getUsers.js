import React from 'react'
import './getUsers.css'


export default function GetUsers(props) {
    
    console.log(props.state.usersPage.users);






    return ( 
        <div className="wrapper"> {
            props.state.usersPage.users.map(u => 
                <div key = {u.id}>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {
                            u.toggle 
                            ? <button onClick = {() => {props.follow(u.id)}}>unfollow</button> 
                            : <button onClick = {() => {props.unFollow(u.id)}}>follow</button>
                        }
                    </div>
                </div>

            )
        }</div>
    )

    
}


