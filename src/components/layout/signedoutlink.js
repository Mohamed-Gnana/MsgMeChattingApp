import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedOut() {
    return (
        <div>
            <ul className = "right">
                <li><NavLink to = "signup"><b>Sign Up</b></NavLink></li>
                <li><NavLink to = "signin"><b>Log In</b></NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOut
