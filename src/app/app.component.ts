import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    ngOnChanges() {
        console.log('test ngOnchanges');
    }
    ngOnInit() {
        console.log('test ngOnInit');
    }
    ngDoCheck(){
        console.log('test ngDoCheck');
    }
    ngAfterContentInit() {
        console.log('testNgAfterContentInit');
    }
    ngAfterContentChecked() {
        console.log('testAfterContentChecked');
    }
    ngAfterViewInit() {
        console.log('test ngAfterViewInit');
    }
    ngAfterViewChecked() {
        console.log('test ngAfterViewChecked');
    }
    ngOnDestroy() {
        console.log('test ngOnDestroy');
    }
}
