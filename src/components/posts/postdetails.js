import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";
import CreateComment from "../comments/createcomment";
import CommentList from "../comments/commentlist";

const PostDetails = (props) => {
    const {posts} = props;
    const post = posts ? posts.filter(post => post.id === props.match.params.post_id) : null ;
    const postlist = post ? post.map(post => {
        return (
            <div className = "card z-depth-0 post-summary" key = {post.id}>
                    <div className = "card-content white darken-3 grey-text text-darken-3">
                        <div className ="row">
                            <div className = "col s2">
                                <label className = "btn btn-floating blue lighten-1">{post.autherFirstName[0] + post.autherLastName[0]}</label>
                            </div>
                            <div className = "col s8">
                                <label className = "grey-text text-darken-4"><b>{post.autherFirstName + " " + post.autherLastName}</b> <br/>{moment(post.createdAt.toDate()).calendar()} </label>
                            </div>
                        </div>
                        <p className = "grey-text text-darken-4">{post.postContent}</p>
                    </div>
            </div>
        )
    }): <p className = 'grey-text text-darken-3'>No such post</p>
    return (
        <div className = "container">
            <div className = "container">
                {postlist}
                <CreateComment postId = {props.match.params.post_id} />
                <CommentList postId = {props.match.params.post_id} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts : state.firestore.ordered.posts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'posts' , orderBy : ['createdAt' , 'desc']}
    ])
    )(PostDetails);
