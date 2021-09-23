import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { TextField, Button } from "@material-ui/core";

import { signUp } from "../../store/actions/authActions";


const SignUp = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        emoji: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(user));
        setUser({ name: "", email: "", password: "", emoji: "" });
    };

    if (auth._id) return <Redirect to="/" />;

    return (
        <>
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <h1>signUp:</h1>
                <TextField
                    id="enter-name"
                    label="enterName"
                    variant="outlined"
                    fullWidth
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <TextField
                    id="enter-email"
                    label="enterEmail"
                    variant="outlined"
                    fullWidth
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <TextField
                    id="enter-password"
                    type="password"
                    label="enterPassword"
                    variant="outlined"
                    fullWidth
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <TextField
                    id="enter-emoji"
                    type="emoji"
                    label="enteremoji"
                    variant="outlined"
                    fullWidth
                    value={user.emoji}
                    onChange={(e) => setUser({ ...user, emoji: e.target.value })}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    SignUp
                </Button>
            </form>
        </>
    );
};

export default SignUp;