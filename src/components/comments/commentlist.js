import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import CommentSummary from "./commentsummary";

class CommentList extends React.Component {
    render() {
        const {comments} = this.props ;
        const commentlist = comments ? (comments.map(comment => {
            return (
                <div key = {comment.id}>
                    <CommentSummary comment = {comment} postId = {this.props.postId}/>
                 </div>
            )
        })) : (<p className = "grey-text text-darken-3">There is no comments.</p>);
        return (
            <div>
                {commentlist}
            </div>
        )
    }
}

const mapStateToProps = (state , props) => {
    const comment = "comments" + props.postId; 
    return {
        comments : state.firestore.ordered[comment]
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => [
        {collection : "comments" + props.postId , orderBy : ['createdAt' , 'desc']}
    ])
)(CommentList) ;
