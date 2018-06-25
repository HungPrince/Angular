import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
    selector: 'app-countdown-viewchild-parent',
    templateUrl: './countdown-viewchild-parent.component.html',
    styleUrls: ['./countdown-viewchild-parent.component.scss']
})
export class CountdownViewchildParentComponent implements AfterViewInit {
    @ViewChild(CountdownTimerComponent)
    private timerComponent: CountdownTimerComponent;

    seconds() { return 0; }

    ngAfterViewInit() {
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }

    start() {
        this.timerComponent.start();
    }

    stop() {
        this.timerComponent.stop();
    }
}
