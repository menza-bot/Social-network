import React from 'react'
import { NavLink } from "react-router-dom";
import './HeaderLogin.css'


const HeaderLogin = (props) => {
    
    let login = props.login
    let isAuth = props.isAuth

    return(
        <div className="login-block">
            { isAuth ? login :
            <NavLink to = {'/login'}>
                log in
            </NavLink>
            }
        </div>
    )
}

export default HeaderLogin