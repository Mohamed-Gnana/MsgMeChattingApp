const initState = {
    posts : []
}

const postReducer = (state = initState , action) => {
    switch (action.type){
        case "Create_Post":
            const id = Math.random();
            const post = {
                ...action.post,
                id : id
            }
            return {
                ...state,
                posts:[...state.posts , post]
            }
        case "Create_Post_Error" :
            console.log("Failed");
            return state;
        case "Delete_Post": 
            let newpost = state.posts.filter((post) => post.id !== action.id)
            return{
                ...state,
                posts : newpost
            }
        case "Delete_Post_Error": 
            console.log("Failed")
            return state;
        default :
            return state ;
    }
}

export default postReducer;