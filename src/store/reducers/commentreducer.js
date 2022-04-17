const initState = {
    comments : []
}

const commentReducer = (state = initState , action) => {
    switch (action.type){
        case "Create_Comment":
            const id = Math.random();
            const comment = {
                ...action.comment,
                id : id
            }
            return {
                ...state,
                comments:[...state.comments , comment]
            }
        case "Create_Comment_Error" :
            console.log("Failed");
            return state;
        case "Delete_Comment": 
            let newcomment = state.comments.filter((comment) => comment.id !== action.id)
            return{
                ...state,
                comments : newcomment
            }
        case "Delete_Comment_Error": 
            console.log("Failed")
            return state;
        default :
            return state ;
    }
}

export default commentReducer;