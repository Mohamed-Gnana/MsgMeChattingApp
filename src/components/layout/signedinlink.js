import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { SigningOut } from "../../store/actions/authactions";

function SignedIn({signout , profile}) {
    return (
        <div>
            <ul className = "right">
                <li><NavLink to = "/"><b>Home</b></NavLink></li>
                <li><NavLink to = "/chat"><b>Chat</b></NavLink></li>
                <li><NavLink to = "/signin" onClick = {signout}><b>Log out</b></NavLink></li>
                <li><NavLink to = "/personal" className = "btn btn-floating blue darken-3">{profile.initials}</NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout : () => dispatch(SigningOut())
    }
}

export default connect(null , mapDispatchToProps )(SignedIn);
