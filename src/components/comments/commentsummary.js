import React from 'react'
import moment from "moment";
import { connect } from 'react-redux';
import { DeleteComment } from "../../store/actions/commentactions";

class CommentSummary extends React.Component {
    clickme = (e) => {
        e.preventDefault();
        console.log(this.props.comment.id)
        this.props.deletecomment({postId : this.props.postId , commentId :this.props.comment.id});
    }
    render(){
        const {comment} = this.props;
        return (
            <div>
                <div className = "card z-depth-0 comment-summary">
                    <div className = "card-content white darken-3 grey-text text-darken-3">
                        <div className ="row">
                            <div className = "col s2">
                                <label className = "btn btn-floating blue lighten-1">{comment.autherFirstName[0] + comment.autherLastName[0]}</label>
                            </div>
                            <div className = "col s8">
                                <label className = "grey-text text-darken-4"><b>{comment.autherFirstName + " " + comment.autherLastName}</b> <br/>{moment(comment.createdAt.toDate()).calendar()} </label>
                            </div>
                            <div className = "col s2">
                                <button className = "force white-text blue lighten-1 right" onClick = {this.clickme}><b>X</b></button>
                            </div>
                        </div>
                        <p className = "grey-text text-darken-4">{comment.commentContent}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletecomment : (id) => dispatch(DeleteComment(id))
    }
}

export default connect(null ,mapDispatchToProps)(CommentSummary);
