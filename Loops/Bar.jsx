import React from 'react'
import "./Bar_style.css"
import {Bar} from '../Bar_data.js'

const NavBar = () => {
  return (
    <>
        <nav class="nav-style">
        <ul>
            {Bar.map((b)=>
                 <li><a href={b.link1}>{b.name}</a></li>
            )}
        </ul>
        </nav>
    </>
  )
}

export default NavBar