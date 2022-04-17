import React from 'react'
import SignedIn from "./signedinlink";
import Signedout from "./signedoutlink";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function navbar({auth , profile}) {
    return (
        <div>
            <nav className="nav-wrapper blue lighten-1">
              <div className = "container">
                  <Link to = "/" className = "left brand-logo"><b>MsgMe</b></Link>
                  {auth.uid ? <SignedIn profile = {profile}/> : <Signedout/> }   
              </div>
            </nav>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        profile : state.firebase.profile
    }
}

export default connect(mapStateToProps)(navbar);
