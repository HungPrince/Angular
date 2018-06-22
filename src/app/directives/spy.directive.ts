import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appSpy]'
})
export class SpyDirective implements OnInit, OnDestroy {
    
    constructor() { }

    ngOnInit() {
        console.log('onInit');
    }

    ngOnDestroy() {
        console.log('onDestroy');
    }
}
