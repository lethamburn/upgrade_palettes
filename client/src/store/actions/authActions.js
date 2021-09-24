import axios from "axios";
import { url } from "../../api";

export const signUp = (user) => {
    return (dispatch) => {
        axios
            .post(`${url}/register`, user)
            .then((data) => {
                console.log('Register - OK TODO', data)

                dispatch({
                    type: "SIGN_UP",
                    token: data,
                });
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const signIn = (email, password) => {
    return (dispatch) => {
        axios
            .post(`${url}/authenticate`, { email, password })
            .then((response) => {
                localStorage.setItem("token", response.data.data.token);
                debugger;
                localStorage.setItem("user", response.data.data.user);

                dispatch({
                    type: "SIGN_IN",
                    token: response.data.data,
                });
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const signOut = () => {
    return (dispatch) => {
        dispatch({
            type: "CLEAR_TODOS",
        });

        dispatch({
            type: "SIGN_OUT",
        });

    };
};

export const loadUser = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token;
        if (token) {
            dispatch({
                type: "USER_LOADED",
                token,
            });
        } else return null;
    };
};