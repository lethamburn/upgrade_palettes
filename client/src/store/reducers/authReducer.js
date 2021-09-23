//Estado inicial -> todo a null y mira si hubiese token
const initialState = {
    token: localStorage.getItem("token"),
    name: null,
    email: null,
    _id: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_UP":
            console.log('Registered')
            break;
        case "SIGN_IN":
        case "USER_LOADED":
            return {
                ...initialState,
                token: action.token.token,
                name: action.token.user.name,
                email: action.token.user.email,
                _id: action.token.user._id,
            };
        case "SIGN_OUT":
            localStorage.removeItem("token");
            return {
                token: null,
                name: null,
                email: null,
                _id: null,
            };
        default:
            return state;
    }
};

export default authReducer;