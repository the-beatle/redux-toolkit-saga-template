import { AsyncSubject } from "rxjs";
import { useEffect } from "react";

function AsyncSubjects() {
  useEffect(() => {
    const subject = new AsyncSubject();
 
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
    subject.complete();
    
    return () => console.log("subscriptions done");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>AsyncSubject</h1>
        <p>The AsyncSubject is similar to the last() operator, in that it waits for the complete notification in order to deliver a single value</p>
      </header>
    </div>
  );
}

export default AsyncSubjects;


