const initState = {
    authError : null
}

const authReducer = (state = initState , action) => {
    switch (action.type){
        case "Signup_Success":
            console.log("success_signup");
            return {
                ...state,
                authError : null
            }
        case "Signup_Error":
            console.log("Failed_signup");
            return {
                ...state,
                authError : action.err.message
            }
        case "Login_Suc":
            console.log("success_logIn");
            return{
                ...state,
                authError : null
            }
        case "Login_Error":
            console.log("Failed_login");
            return{
                ...state,
                authError : "Login Failed"
            }
        case "Signout_Success":
            console.log("success_signout");
            return state ;
        default :
            return state ;   
    }
}

export default authReducer;