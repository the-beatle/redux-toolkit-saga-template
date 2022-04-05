import { asyncScheduler, AsyncSubject, from, Observable, of } from "rxjs";
import { useEffect } from "react";
import { observeOn,map,delay } from "rxjs/operators";

function Scheduler() {
  useEffect(() => {
    const task = () => console.log('it works!');
    asyncScheduler.schedule(task,2000)

    const observable = new Observable((proxyObserver) => {
      proxyObserver.next(1);
      proxyObserver.next(2);
      proxyObserver.next(3);
      proxyObserver.complete();
    }).pipe(
      observeOn(asyncScheduler,1000)
    );
     
    observable.subscribe({
      next(x) {
        console.log('got value ' + x)
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
         console.log('done');
      }
    });
    
    return () => console.log("subscriptions done");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Scheduler</h1>
        <ul>
          <li>A Scheduler is a data structure</li>
          <li>A Scheduler is a execution context</li>
          <li>A Scheduler is a virtual clock</li>
        </ul>
        <p>A Scheduler lets you define in what execution context will an Observable deliver notifications to its Observer.</p>
      </header>
    </div>
  );
}

export default Scheduler;


