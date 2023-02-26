import "./App.css";
import {HashRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import Blog from "./features/blog/Blog";

function App() {
    return (
        <Router>
            <div className="App">
                <ul className="topnav">
                    <li>
                        <NavLink className="navLink" to="/">
                            Rxjs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navLink" to="/observables">
                            Observable
                        </NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Blog}/>
                    <Route exact path="/observables" component={Blog}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
