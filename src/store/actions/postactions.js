export const AddPost = (post) => {
    return (dispatch , getState , {getFirebase}) => {
        // async code with database 
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const autherId = getState().firebase.auth.uid;
        firestore.collection("posts").add({
            ...post,
            autherFirstName : profile.firstName,
            autherLastName : profile.lastName,
            autherId : autherId , 
            createdAt : new Date()
        }).then(() => {
            dispatch({type : "Create_Post" , post : post});
        }).catch((err) => {
            dispatch({type : "Create_Post_Error", err})
        })
    }
}

export const DeletePost = (id) => {
    return (dispatch , getState , {getFirebase}) => {
        // async code with database 
        const firestore = getFirebase().firestore();
        console.log(id);
        firestore.collection("posts").doc(id).delete()
            .then(() => {
                dispatch({type : "Delete_Post" , id : id});
            }).catch((err) => {
                dispatch({type : "Delete_Post_Error", err})
            })
    }
}