import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar/Nabvar';
import { loadUser } from "./store/actions/authActions";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;