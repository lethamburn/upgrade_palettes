import "./App.css";
import React, {useState} from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Home, Login, Palettes, Profile, Register, Colors } from "./pages";
import { Nav, Footer } from "./layouts";

function App() {
  const [user, setUser] = useState(null);
  const saveUser = (user) => {
    setUser(user);
    console.log(user);
  };
  return (
    <div className="App">
      <h2>Upgrade Palettes</h2>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} saveUser={saveUser} />
          <Route path="/palettes" component={Palettes} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/colors" component={Colors} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
