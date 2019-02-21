const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log("LOGIN_ERROR")
            return {
                ...state,
                authError: "Login failed"
            }
        case "LOGIN_SUCCESS":
            console.log("login_succes");
            return {
                ...state,
                authError: null
            }
        case "SIGNOUT_SECCESS":
            console.log("Signout_ success")
            return state;
        case "SIGNUP_SUCCESS":
            console.log("signup_success");
            return {
                ...state,
                authError: null
            }
        case "SIGNUP_ERROR":
            console.log("SIGNUP_ERROR");
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;