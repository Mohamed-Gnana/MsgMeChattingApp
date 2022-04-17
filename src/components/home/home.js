import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import CreatePost from "../posts/createpost";
import PostList from "../posts/postlist";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import Notifications from "./notificaions";

function Home({posts , auth}) {
    if (!auth.uid) return <Redirect to = "/signin" />
    return (
        <div className = "home container">
            <div className = "row">
                <div className = "col s8">
                    <CreatePost/>
                    {posts ? <PostList posts = {posts} /> : <p className = "red-text">No More posts</p>}
                </div>
                <div className = "col s4">
                {posts ? <Notifications posts = {posts} /> : <p className = "red-text">No Notificaions</p>}
                </div>
            </div>            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        posts : state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection : 'posts' , orderBy : ['createdAt' , 'desc']
    }]))(Home);
