import React from 'react'
import moment from "moment";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';


function MsgList({msgs , id , auth}) {
    const filteredMsgs = msgs ? msgs.filter(msg => msg.senderId === id || (msg.senderId === auth.uid && msg.recieverId === id)) : null ;
    const msglist = filteredMsgs ? (filteredMsgs.map(msg => {
        return (
            <div key ={msg.id}>
                <div className = "card z-depth-0">
                    <div className = "card-content white darken-3 grey-text text-darken-3">
                        <div className ="row">
                            <div className = "col s2">
                                <label className = "btn btn-floating blue lighten-1">{msg.senderName[0] + 'T' + msg.recieverName[0]}</label>
                            </div>
                            <label className = "grey-text text-darken-4"><b>{msg.senderName}</b> <br/>{moment(msg.createdAt.toDate()).calendar()} </label>
                        </div>
                        <p className = "grey-text text-darken-4">{msg.msgContent}</p>
                    </div>
                </div>
            </div>
        )
    })) : (<p className = "grey-text text-darken-4">No masseges</p>);
    return (
        <div>
            {msglist}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    const db = state.firebase.auth;
    return {
        auth : db,
        msgs : state.firestore.ordered[db.uid]
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        const db = props.auth.uid ? [{collection : props.auth.uid , orderBy : ['createdAt' , 'desc']}] : [];
        return db;
    })
)(MsgList)
