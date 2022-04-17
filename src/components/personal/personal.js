import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from "moment";
import { Link, Redirect } from "react-router-dom";
import CreatePost from "../posts/createpost";

function Personal({auth , profile , posts}) {
    if (!auth.uid) return <Redirect to = "/signin" />
    const profileLoading = auth.uid && profile.initials ? (
            <div className = "profile white">
                <h1 className = "blue lighten-1 white-text center container logo"><b>{(profile.initials)}</b></h1>
                <h1 className = "white-text center"><b>{profile.firstName + " " + profile.lastName}</b> <br/> </h1>
            </div>
        ) : <p className = "black-text">Loading Profile</p> ;

    const filteredPosts = posts ? posts.filter(post => post.autherId === auth.uid) : null ;
    const postlist = filteredPosts ? filteredPosts.map(post => {
        return (
            <div className = "card z-depth-0 post-summary" key = {post.id}>
                    <div className = "card-content white darken-3 grey-text text-darken-3">
                    <Link to = {"/" + post.id} >
                            <div className ="row">
                                <div className = "col s2">
                                    <label className = "btn btn-floating blue lighten-1">{post.autherFirstName[0] + post.autherLastName[0]}</label>
                                </div>
                                <div className = "col s8">
                                    <label className = "grey-text text-darken-4"><b>{post.autherFirstName + " " + post.autherLastName}</b> <br/>{moment(post.createdAt.toDate()).calendar()} </label>
                                </div>
                            </div>
                                <p className = "grey-text text-darken-4">{post.postContent}</p>
                        </Link>
                    </div>
                </div>
        )
    }) : <p className = "black-text">Loading Your Posts</p>
    return (
        <div className = "container personal">
            <div className = "container">
                {profileLoading}
                <CreatePost />
                {postlist}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth : state.firebase.auth,
        profile : state.firebase.profile,
        posts : state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'posts' , orderBy : ['createdAt' , 'desc']}
    ])
)(Personal)
