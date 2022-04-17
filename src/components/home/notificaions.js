import React from "react";
import moment from "moment";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const Notification = ({posts , users}) => {
    posts = posts.slice(0,5);
    users = users ? users.slice(0,5) : null;
    const postlist = posts && posts.map(post => {
                            return(
                            <li key = {post.id}><label className ="grey-text text-darken-3"><b>- {post.autherFirstName} added new post {moment(post.createdAt.toDate()).fromNow()}.</b></label></li>
                            )
                    });
    const userlist = users && users.map(user => {
                            return(
                            <li key = {user.id}><label className ="grey-text text-darken-3"><b>- {user.firstName + " " + user.lastName} created new account {moment(user.createdAt.toDate()).fromNow()}.</b></label></li>
                            )
                    })
    return(
        <div className = "section white">
                    <ul className = "notification">
                        {postlist}
                        {userlist}
                    </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users : state.firestore.ordered.users
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'users' , orderBy : ['createdAt' , 'desc']}
    ])
)(Notification);