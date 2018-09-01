import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersSubscription: Subscription;
  customSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe(map((x: number) => {
        return x*2;
      }));
    this.numbersSubscription = myNumbers.subscribe(
      (number: number) => console.log(number)
    )

    const myObservable = Observable.create((observer: Observer<string>) => {
      setInterval(() => {
        observer.next('first package');
      }, 2000);
      setInterval(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
    });
    this.customSubscription = myObservable.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log('completed')
    )
  }

  ngOnDestroy() {
    this.numbersSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}
