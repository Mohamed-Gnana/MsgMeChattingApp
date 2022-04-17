import React from "react";
import CreateMSg from "./createmsg";
import UserFriends from "./userfriends";
import MsgList from "./msglist";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Chat extends React.Component {
    state = {
        recieverId : 'aR9EYyuSInb8tFnjewR6s61InBy2',
        recieverName : 'Mohamed Gnana'
    }
    info = (object) => {
        console.log(object);
        this.setState({
            recieverId : object.recieverId,
            recieverName : object.recieverName
        })
    }
    render() { 
        const {auth} = this.props ; 
        if (!auth.uid) return <Redirect to = "/signin" />
        return(
            <div className = "container chat">
                <div className = "row">
                    <div className = "col s8">
                        <CreateMSg info = {this.state} />
                        <MsgList id = {this.state.recieverId}/>
                    </div>  
                    <div className = "col s4">
                        <UserFriends info = {this.info}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(Chat);