import { Component, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-angular-elemement',
    templateUrl: './angular-elemement.component.html',
    host: {
        '[@state]': 'state',
        '@state.done': 'onAnimationDone($event)'
    },
    animations: [
        trigger('state', [
            state('opened', style({ transform: 'translateY(0%)' })),
            state('void, closed', style({ transform: 'translateY(100 %)', opacity: 0 })),
            transition('*=>*', animate('100ms ease-in'))
        ])
    ],
    styleUrls: ['./angular-elemement.component.scss']
})
export class AngularElemementComponent {

    private state: 'opened' | 'closed' = 'closed';
    _message: string;
    @Input()
    set message(message: string) {
        this._message = message;
        this.state = 'opened';
    }
    get message(): string {
        return this._message;
    }

    @Output() closed = new EventEmitter();

    onAnimationDone(e: AnimationEvent) {
        if (e.animationName === 'closed') {
            this.closed.next();
        }
    }
}
