
import React from 'react'
import { NavLink } from "react-router-dom";
import './HeaderLogin.css'


const HeaderLogin = (props) => {

    return(
        <div className="login-block">
            {  props.isAuth 
            ?
                
                <div className = 'log-name'>{props.login} - <button className = 'log-button' onClick = {props.LogoutThunkCreator}><span className = 'title'>log out</span></button></div>
                
            : 
                <NavLink to = {'/login'}>
                    log in
                </NavLink> 
            }
        </div>
    )
}

export default HeaderLogin