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
          <Link to="/observables">Observable</Link>
          <Link to="/observers">Observers</Link>
          <Link to="/operators">Operators</Link>
          <Link to="/subscriptions">Subscriptions</Link>
          <Link to="/subjects">Subjects</Link>
          <Link to="/multicasted-observables">Multicasted Observables</Link>          
          <Link to="/behaviorsubject">BehaviorSubject</Link>
          <Link to="/replaySubject">Replaysubject</Link>
          <Link to="/asyncsubject">AsyncSubject</Link>
          <Link to="/scheduler">Scheduler</Link>
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
