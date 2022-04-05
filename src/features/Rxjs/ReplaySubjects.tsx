import { BehaviorSubject, ConnectableObservable, from, interval, ReplaySubject, Subject } from "rxjs";
import { useEffect, useState } from "react";
import { multicast } from 'rxjs/operators';

function ReplaySubjects() {
  useEffect(() => {
    const subject = new ReplaySubject(3); // buffer 3 values for new subscribers
 
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
     
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
     
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });
     
    subject.next(5);
    
    return () => console.log("subscriptions done");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ReplaySubject</h1>
        <p>A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.</p>
        <p>When creating a ReplaySubject, you can specify how many values to replay:</p>
      </header>
    </div>
  );
}

export default ReplaySubjects;



function ReplaySubjects2() {
  useEffect(() => {
    const subject = new ReplaySubject(100, 500 /* windowTime */);
 
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
     
    let i = 1;
    setInterval(() => subject.next(i++), 200);
     
    setTimeout(() => {
      subject.subscribe({
        next: (v) => console.log(`observerB: ${v}`)
      });
    }, 1000);
    
    return () => console.log("subscriptions done");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ReplaySubject</h1>
        <p>A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.</p>
        <p>When creating a ReplaySubject, you can specify how many values to replay:</p>
      </header>
    </div>
  );
}

