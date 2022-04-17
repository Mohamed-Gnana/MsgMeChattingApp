import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class UserFriends extends React.Component {
    render(){
        const {users , info , auth} = this.props;
        const filteredUsers = users ? users.filter(user => user.id !== auth.uid) : null;
        const userlist = filteredUsers ? (filteredUsers.map(user => {
            return (
                <div key ={user.id} onClick ={() => {info({recieverId : user.id , recieverName : user.firstName + " " + user.lastName})}}>
                            <div className ="row white move">
                                <div className = "col s1">
                                    <label className = "btn btn-floating blue lighten-1">{user.initials}</label>
                                </div>
                                <div className = "col s9 offset-s1">
                                    <h6 className = "grey-text text-darken-4 here">{user.firstName + " " + user.lastName}</h6>
                                </div>
                    </div>
                </div>
            )})) : (<p>No users</p>);
        return (
            <div>
                {userlist}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        users : (state.firestore.ordered.users) 
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'users'}
    ])
    )(UserFriends);
