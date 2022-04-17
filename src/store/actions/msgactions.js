export const AddMsg = (msg) => {
    return (dispatch , getState , {getFirebase}) => {
        // async code with database 
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const senderId = getState().firebase.auth.uid;
        firestore.collection(msg.recieverId).add({
            ...msg,
            senderName : profile.firstName + " " + profile.lastName,
            senderId :senderId,
            createdAt : new Date()
        }).then(() => {
            firestore.collection(senderId).add({
                ...msg,
                senderName : profile.firstName + " " + profile.lastName,
                senderId :senderId,
                createdAt : new Date()
            }).then(() => {
                dispatch({type : "Create_Msg" , msg : msg});
            })
            }).catch((err) => {
            dispatch({type : "Create_Msg_Error", err})
            })
    }
}

export const DeleteMsg = (id) => {
    return {
        type : "Delete_Msg" , id : id
    }
}