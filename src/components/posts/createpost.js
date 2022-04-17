import React from 'react'
import { connect } from 'react-redux';
import {AddPost} from "../../store/actions/postactions";

class CreatePost extends React.Component{
    state = {
        postContent : ''
    }
    changeme = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    submitme = (e) => {
        e.preventDefault();
        this.props.addPost(this.state);
        this.setState({
            postContent : ''
        });
    }
    render(){
        return (
            <div>
                <form className = "white" onSubmit = {this.submitme} >
                    <div className = "input-field">
                        <label htmlFor = "postContent">Add Post</label>
                        <textarea  id = "postContent" className = "materialize-textarea" onChange = {this.changeme} value = {this.state.postContent}></textarea>
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
        addPost : (post) => dispatch(AddPost(post))
    }
}

export default connect(null , mapDispatchToProps)(CreatePost);
