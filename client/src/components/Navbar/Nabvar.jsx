import React from "react";

import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../store/actions/authActions";

const NavBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);

    const handleSignOut = () => {
        dispatch(signOut());
        history.push("/signin");
    };

    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <h4 >
                        <Link to="/">
                            Upgrade Color Palette;
                        </Link>
                    </h4>
                    {user._id ? (
                        <>
                            <h1>
                                Logged in as {user.name}
                            </h1>
                            <Button
                                edge="end"
                                color="inherit"
                                onClick={() => handleSignOut()}
                            >
                                <Link to="/">
                                    SignOut
                                </Link>
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                edge="end"
                                color="inherit"
                            >
                                <Link to="/signin">
                                    SignIn
                                </Link>
                            </Button>
                            <Button
                                edge="end"
                                color="inherit"
                            >
                                <Link to="/signup">
                                    SignUp
                                </Link>
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar;