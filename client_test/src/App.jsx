import "./App.css";
import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, Palettes, Profile, Register, Colors } from "./pages";
import { Nav, Footer } from "./layouts";
import { Logout } from "./components";

export const UserContext = React.createContext(null);

export function App() {
  const [user, setUser] = useState({});

  const saveUser = (user) => {
    debugger
    setUser(user);
    console.log("APP USER", user);
  };

  const deleteUser = () => {
    debugger
    setUser(null);
  };
  return (
    <div className="App">
      <h2>Upgrade Palettes</h2>
      <Router>
        <UserContext.Provider value={user}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/login"
              render={(props) => <Login {...props} saveUser={saveUser} />}
            />
            <Route path="/palettes" component={Palettes} />
            <Route path="/profile" component={Profile} />
            <Route path="/register" component={Register} />
            <Route path="/colors" component={Colors} />
            <Route
              path="/logout"
              render={(props) => <Logout {...props} deleteUser={deleteUser} />}
            />
          </Switch>
        </UserContext.Provider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
