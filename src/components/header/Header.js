import React from "react"
import './../../styles/Header.css'
/* import { Fa500Px } from 'react-icons/fa'
import { IconContext } from "react-icons" */
import HeaderLogin from './HeaderLogin'




const Header = (props) => {
    
    
    return (
        <div className="header">
            <HeaderLogin isAuth = {props.isAuth} login = {props.login} />
            {/* <IconContext.Provider value = {{className: 'github', size: '35px'}}>
                <div><Fa500Px /></div>
            </IconContext.Provider> */}  {/* this is our icon that we need to style */}
        </div>
    )
}

export default Header