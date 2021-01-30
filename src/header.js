import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from "./chat";
import { About } from "./About";

export const Header = () => {
  return (
    <>
      <Router>
        <header>
          <div className="logo"> CheatBot App </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">users Page</Route>
          <Route path="/">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
