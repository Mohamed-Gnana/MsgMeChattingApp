import React from 'react'
import { connect } from 'react-redux';
import {AddMsg} from "../../store/actions/msgactions";

class CreateMsg extends React.Component{
    state = {
        msgContent : '',
        recieverId : 'aR9EYyuSInb8tFnjewR6s61InBy2',
        recieverName : 'Mohamed Gnana'
    }
    changeme = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
            recieverId : this.props.info.recieverId,
            recieverName : this.props.info.recieverName
        });
    }
    submitme = (e) => {
        e.preventDefault();
        this.props.addMsg(this.state);
        this.setState({
            ...this.state,
            msgContent : '',
        });
    }
    render(){
        return (
            <div>
                <form className = "white" onSubmit = {this.submitme} >
                    <div className = "input-field">
                        <label htmlFor = "msgContent">Add Msg</label>
                        <textarea  id = "msgContent" className = "materialize-textarea" onChange = {this.changeme} value = {this.state.msgContent}></textarea>
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
        addMsg : (msg) => dispatch(AddMsg(msg))
    }
}

export default connect(null , mapDispatchToProps)(CreateMsg);
