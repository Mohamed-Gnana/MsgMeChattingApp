import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { SigningIn } from "../../store/actions/authactions";

class SignIn extends React.Component {
    state = {
        email : '',
        password : ''
    }
    changeme = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    submitme = (e) => {
        e.preventDefault();
        this.props.chkUser(this.state)
        this.setState({
            userName : '',
            password : ''
        });
    }
    render(){
        const {auth , authError} = this.props;
        if (auth.uid) return <Redirect to = "/" />
        return (
            <div className = "container signin">
                <div className = "container" >
                    <form className = "white" onSubmit = {this.submitme} >
                    <h5 className = "blue-text text-darken-3"><b>Log In</b></h5>
                    <div className = "input-field">
                            <label htmlFor = "email">Email</label>
                            <input  id = "email" type = "text" onChange = {this.changeme} value = {this.state.content}/>
                        </div>
                        <div className = "input-field">
                            <label htmlFor = "password">Password</label>
                            <input  id = "password" type = "password" onChange = {this.changeme}value = {this.state.content}/>
                        </div>
                        <div className = "input-field">
                            <button className = "btn blue darken-2">Submit</button>
                            <div className = 'red-text text-darken-2 center'>
                                {authError ? <p>{authError}</p> : null}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth : state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chkUser : (userInfo) => dispatch(SigningIn(userInfo))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);