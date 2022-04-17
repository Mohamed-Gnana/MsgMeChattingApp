const initState = {
    msgs : []
}

const msgReducer = (state = initState , action) => {
    switch (action.type){
        case "Create_Msg":
            const id = Math.random();
            const msg = {
                ...action.msg,
                id : id
            }
            return {
                ...state,
                msgs : [...state.msgs , msg]
            }
        case "Create_Msg_Error" :
            console.log("Failed");
            return state;
        case "Delete_Msg": 
            let newmsg= state.msgs.filter((msg) => msg.id !== action.id)
            return{
                ...state,
                msgs : newmsg
            }
        default :
            return state ;
    }
}

export default msgReducer;