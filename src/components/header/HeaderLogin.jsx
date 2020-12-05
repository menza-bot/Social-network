import { Button } from '@material-ui/core';
import React from 'react'
import { NavLink } from "react-router-dom";
import './HeaderLogin.css'


const HeaderLogin = (props) => {

    return(
        <div className="login-block">
            {  props.isAuth 
            ?
                
                <div>{props.login} - <Button variant = 'contained' color = 'secondary' onClick = {props.LogoutThunkCreator}>log out</Button></div>
                
            : 
                <NavLink to = {'/login'}>
                    log in
                </NavLink> 
            }
        </div>
    )
}

export default HeaderLogin