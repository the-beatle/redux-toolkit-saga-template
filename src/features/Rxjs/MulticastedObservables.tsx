import { ConnectableObservable, from, interval, Subject } from "rxjs";
import { useEffect, useState } from "react";
import { multicast } from 'rxjs/operators';

function MulticastedObservables() {
  useEffect(() => {
    const source = interval(500);
    const subject = new Subject<number>();
    const multicasted = source.pipe(multicast(subject)) as ConnectableObservable<number>
    let subscription1: { unsubscribe: () => void; }, subscription2: { unsubscribe: () => void; }, subscriptionConnect: { unsubscribe: () => void; };
    
    subscription1 = multicasted.subscribe({
      next: (v: any) => console.log(`observerA: ${v}`)
    });
    // We should call `connect()` here, because the first
    // subscriber to `multicasted` is interested in consuming values
    subscriptionConnect = multicasted.connect();
    
    setTimeout(() => {
      subscription2 = multicasted.subscribe({
        next: (v: any) => console.log(`observerB: ${v}`)
      });
    }, 600);
    
    setTimeout(() => {
      subscription1.unsubscribe();
    }, 1200);
    
    // We should unsubscribe the shared Observable execution here,
    // because `multicasted` would have no more subscribers after this
    setTimeout(() => {
      subscription2.unsubscribe();
      subscriptionConnect.unsubscribe(); // for the shared Observable execution
    }, 2000);
    return () => console.log("subscriptions done");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Multicasted Observables</h1>
        <p>A multicasted Observable uses a Subject under the hood to make multiple Observers see the same Observable execution</p>
      </header>
    </div>
  );
}

export default MulticastedObservables;
