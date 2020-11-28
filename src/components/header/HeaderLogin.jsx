import React from 'react'
import { NavLink } from "react-router-dom";
import './HeaderLogin.css'


const HeaderLogin = (props) => {

    return(
        <div className="login-block">
            {  props.isAuth 
            ?
                
                <div>{props.login} - <button onClick = {props.LogoutThunkCreator} >log out</button></div>
                
            : 
                <NavLink to = {'/login'}>
                    log in
                </NavLink> 
            }
        </div>
    )
}

export default HeaderLogin