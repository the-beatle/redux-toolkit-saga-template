import {
  BehaviorSubject,
  ConnectableObservable,
  from,
  interval,
  Subject,
} from "rxjs";
import { useEffect, useState } from "react";
import { multicast } from "rxjs/operators";

function BehaviorSubjects() {
  useEffect(() => {
    const subject = new BehaviorSubject(0);
    //const subject = new Subject<number>();
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(3);

    return () => console.log("subscriptions done");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>BehaviorSubject</h1>
        <p>
          BehaviorSubjects are useful for representing "values over time". For
          instance, an event stream of birthdays is a Subject, but the stream of
          a person's age would be a BehaviorSubject.
        </p>
      </header>
    </div>
  );
}

export default BehaviorSubjects;
