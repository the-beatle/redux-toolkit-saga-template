import "./App.css";
import Operators from "./features/Rxjs/Operators";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Observables from "./features/Rxjs/Observables";
import Observers from "./features/Rxjs/Observers";
import Subscriptions from "./features/Rxjs/Subscriptions";
import Subjects from "./features/Rxjs/Subjects";
import MulticastedObservables from "./features/Rxjs/MulticastedObservables";
import BehaviorSubjects from "./features/Rxjs/BehaviorSubjects";
import ReplaySubjects from "./features/Rxjs/ReplaySubjects";
import AsyncSubjects from "./features/Rxjs/AsyncSubjects";
import Scheduler from "./features/Rxjs/Scheduler";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link className="navLink" to="/observables">Observable</Link>
          <Link className="navLink" to="/observers">Observers</Link>
          <Link className="navLink" to="/operators">Operators</Link>
          <Link className="navLink" to="/subscriptions">Subscriptions</Link>
          <Link className="navLink" to="/subjects">Subjects</Link>
          <Link className="navLink" to="/multicasted-observables">Multicasted Observables</Link>          
          <Link className="navLink" to="/behaviorsubject">BehaviorSubject</Link>
          <Link className="navLink" to="/replaySubject">Replaysubject</Link>
          <Link className="navLink" to="/asyncsubject">AsyncSubject</Link>
          <Link className="navLink" to="/scheduler">Scheduler</Link>
        </nav>
        <Switch>
          <Route exact path="/observables" component={Observables} />
          <Route exact path="/observers" component={Observers} />
          <Route exact path="/operators" component={Operators} />
          <Route exact path="/subscriptions" component={Subscriptions} />
          <Route exact path="/subjects" component={Subjects} />
          <Route exact path="/multicasted-observables" component={MulticastedObservables}/>
          <Route exact path="/behaviorsubject" component={BehaviorSubjects}/>
          <Route exact path="/replaySubject" component={ReplaySubjects}/>
          <Route exact path="/asyncSubject" component={AsyncSubjects}/>
          <Route exact path="/scheduler" component={Scheduler}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
