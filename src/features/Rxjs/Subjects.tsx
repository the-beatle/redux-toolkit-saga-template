import { from, Subject } from "rxjs";
import { useEffect, useState } from "react";

function Subjects() {
  useEffect(() => {
    const subject = new Subject<number>();
    subject.subscribe({
      next: (v: number) => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: (v: number) => console.log(`observerB: ${v}`),
    });

    subject.next(1);
    subject.next(2);
    const observable = from([1, 2, 3])
    observable.subscribe(subject);// You can subscribe providing a Subject

    return () => console.log("subscriptions done");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Subjects</h1>
        <p>
          A <strong>Subject</strong> is like an Observable, but can multicast to
          many Observers. Subjects are like EventEmitters: they maintain a
          registry of many listeners
        </p>
        <p>you can subscribe providing a Subject</p>
        <p>There are also a few specializations of the Subject type: BehaviorSubject, ReplaySubject, and AsyncSubject.</p>
      </header>
    </div>
  );
}

export default Subjects;
