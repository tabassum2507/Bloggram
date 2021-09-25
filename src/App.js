import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Single from "./components/Single";
import Write from "./pages/Write";
import Settings from "./components/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  const currentUser = false;
  return (
    <Router>
    <Topbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/posts">
        <Home />
      </Route>
      <Route path="/register">
        {currentUser ? <Home /> : <Register />}
      </Route>
      <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
      <Route path="/post/:id">
        <Single />
      </Route>
      <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
      <Route path="/settings">
        {currentUser ? <Settings /> : <Login />}
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
