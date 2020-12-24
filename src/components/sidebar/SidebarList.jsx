import React from 'react'
import { NavLink } from 'react-router-dom'
import './../../styles/SidebarList.css'




const NavLinks = [ 
    {id: 1, header: 'Profile', link: '/profile'}, 
    {id: 2, header: 'Messages', link: '/dialogs'}, 
    {id: 3, header: 'News', link: '/news'}, 
    {id: 4, header: 'Music', link: '/music'}, 
    {id: 5, header: 'Settings', link: '/settings'},
    {id: 6, header: 'Users', link: '/findSomeone'}
]

let NavLinksMapped = NavLinks.map((item) => {
    return <NavLink to = {item.link} key = {item.id}>{item.header}</NavLink>
})

export default function SidebarList() {
    return (
        <nav className="sidebarlist" >
            <div className='list'>
                <div>{NavLinksMapped}</div>
            </div>
        </nav>
    )
}