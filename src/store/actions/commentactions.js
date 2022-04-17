export const AddComment = (comment) => {
    return (dispatch , getState , {getFirebase}) => {
        // async code with database 
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const autherId = getState().firebase.auth.uid;
        firestore.collection("comments" + comment.postId).add({
            ...comment,
            autherFirstName : profile.firstName,
            autherLastName : profile.lastName,
            autherId : autherId , 
            createdAt : new Date()
        }).then(() => {
            dispatch({type : "Create_Comment" , comment : comment});
        }).catch((err) => {
            dispatch({type : "Create_Comment_Error", err})
        })
    }
}

export const DeleteComment = (object) => {
    return (dispatch , getState , {getFirebase}) => {
        // async code with database 
        const firestore = getFirebase().firestore();
        console.log(object.commentId);
        console.log(object.postId);
        firestore.collection("comments" + object.postId).doc(object.commentId).delete()
            .then(() => {
                dispatch({type : "Delete_Comment" , id : object.commentId});
            }).catch((err) => {
                dispatch({type : "Delete_Comment_Error", err})
            })
    }
}