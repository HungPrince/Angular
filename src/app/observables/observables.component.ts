import { Component, OnInit } from '@angular/core';
import { Observable, of, interval, timer, Subject, fromEvent } from 'rxjs';
import { filter, map, first, last, takeUntil, finalize, do } from 'rxjs/operators';

@Component({
    selector: 'app-observables',
    templateUrl: './observables.component.html',
    styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

    time = new Observable(observer => {
        setInterval(() => observer.next(new Date().toString()), 1000);
    })

    event = fromEvent(document, 'click');

    constructor() {
        // const cold = Observable.create((observer) => {
        //     observer.next(Math.random());
        // })

        // const hot = cold.publish();

        // hot.subscribe(a => console.log(a));
        // hot.subscribe(b => console.log(b));

        // hot.connect();
        // const iterval = interval(500);
        // const notifier = timer(2000);
        // iterval.pipe(
        //     takeUntil(notifier),
        //     finalize(() => console.log('Complete !'))
        // ).subscribe(i => console.log(i));

        // const subject = new Subject<string>();

        // const subA = subject.subscribe(val => console.log(`Sub A ${val}`));
        // const subB = subject.subscribe(val => console.log(`Sub B ${val}`));
        // subject.next('Hello');

        // setTimeout(() => {
        //     subject.next('World');
        // }, 1000);

        this.event.pipe(
        ).subscribe((val) => console.log('clicked document' + val));
    }

    ngOnInit() {
        // const locations = new Observable((observer) => {
        //     const { next, error } = observer;
        //     let watchId;
        //     if ('geolocation' in navigator) {
        //         watchId = navigator.geolocation.watchPosition(next, error);
        //     } else {
        //         error('Geolocation not avaiable');
        //     }
        //     return { unsubscribe() { navigator.geolocation.clearWatch(watchId) } };
        // })

        // const locationsSubscription = locations.subscribe({
        //     next(position) { console.log('Current Position: ', position); },
        //     error(msg) { console.log('Error Getting Location: ', msg); }
        // });

        // setTimeout(() => { locationsSubscription.unsubscribe(); }, 10000);


        const squareOdd = of(1, 2, 3, 4, 5)
            .pipe(
                last(),
                filter(n => n % 2 !== 0),
                map(n => n * n)
            );

        // // Subscribe to get values
        squareOdd.subscribe(x => console.log(x));


    }

}
