import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

import { signIn } from "../../store/actions/authActions";

const SignIn = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [creds, setCreds] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(creds.email, creds.password));
        setCreds({ email: "", password: "" });
    };

    if (auth._id) return <Redirect to="/" />;

    return (
        <>
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <h1>signIn;</h1>
                <TextField
                    id="enter-email"
                    label="enterEmail"
                    variant="outlined"
                    fullWidth
                    value={creds.email}
                    onChange={(e) => setCreds({ ...creds, email: e.target.value })}
                />
                <TextField
                    id="enter-password"
                    type="password"
                    label="enterPassword"
                    variant="outlined"
                    fullWidth
                    value={creds.password}
                    onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    SignIn
                </Button>
            </form>
        </>
    );
};

export default SignIn;