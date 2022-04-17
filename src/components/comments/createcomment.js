import React from 'react'
import { connect } from 'react-redux';
import {AddComment} from "../../store/actions/commentactions";

class Createcomment extends React.Component{
    state = {
        commentContent : ''
    }
    changeme = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    submitme = (e) => {
        e.preventDefault();
        this.props.addcomment({...this.state , postId : this.props.postId});
        this.setState({
            commentContent : ''
        });
    }
    render(){
        return (
            <div className = "comment">
                <form className = "white" onSubmit = {this.submitme} >
                    <div className = "input-field">
                        <label htmlFor = "commentContent">Add comment</label>
                        <textarea  id = "commentContent" className = "materialize-textarea" onChange = {this.changeme} value = {this.state.commentContent}></textarea>
                    </div>
                    <div className = "input-field">
                        <button className = "btn blue lighten-2">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addcomment : (comment) => dispatch(AddComment(comment))
    }
}

export default connect(null , mapDispatchToProps)(Createcomment);
