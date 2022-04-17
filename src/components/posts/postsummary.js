import React from 'react'
import moment from "moment";
import { connect } from 'react-redux';
import { DeletePost } from "../../store/actions/postactions";

class PostSummary extends React.Component {
    clickme = (e) => {
        e.preventDefault();
        console.log(this.props.post.id)
        this.props.deletePost(this.props.post.id);
    }
    render(){
        const {post} = this.props;
        return (
            <div>
                <div className = "card z-depth-0 post-summary">
                    <div className = "card-content white darken-3 grey-text text-darken-3">
                        <div className ="row">
                            <div className = "col s2">
                                <label className = "btn btn-floating blue lighten-1">{post.autherFirstName[0] + post.autherLastName[0]}</label>
                            </div>
                            <div className = "col s8">
                                <label className = "grey-text text-darken-4"><b>{post.autherFirstName + " " + post.autherLastName}</b> <br/>{moment(post.createdAt.toDate()).calendar()} </label>
                            </div>
                            <div className = "col s2">
                                <button className = "force white-text blue lighten-1 right" onClick = {this.clickme}><b>X</b></button>
                            </div>
                        </div>
                        <p className = "grey-text text-darken-4">{post.postContent}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => dispatch(DeletePost(id))
    }
}

export default connect(null ,mapDispatchToProps)(PostSummary);
