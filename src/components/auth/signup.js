import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { SigningUp } from "../../store/actions/authactions";

class SignUp extends React.Component {
    state = {
        email : '' , 
        password : '',
        firstName : '',
        lastName : ''
    }
    changeme = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    submitme = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            postContent : ''
        });
    }
    render(){
        const {auth , authError} = this.props;
        if (auth.uid) return <Redirect to = "/" />
        return (
            <div className = "container signup">
                <div className = "container">
                    <form className = "white" onSubmit = {this.submitme} >
                    <h5 className = "blue-text text-darken-3"><b>Sign Up</b></h5>
                    <div className = "input-field">
                            <label htmlFor = "email">Email</label>
                            <input  id = "email" type = "text" onChange = {this.changeme} value = {this.state.content}/>
                        </div>
                        <div className = "input-field">
                            <label htmlFor = "password">Password</label>
                            <input  id = "password" type = "password" onChange = {this.changeme}value = {this.state.content}/>
                        </div>
                        <div className = "input-field">
                            <label htmlFor = "firstName">Fist Name</label>
                            <input  id = "firstName" type = "text" onChange = {this.changeme}value = {this.state.content}/>
                        </div>
                        <div className = "input-field">
                            <label htmlFor = "lastName">Last Name</label>
                            <input  id = "lastName" type = "text" onChange = {this.changeme}value = {this.state.content}/>
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
    return {
        auth : state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser : (newUser) => dispatch(SigningUp(newUser))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(SignUp);