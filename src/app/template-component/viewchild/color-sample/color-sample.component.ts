import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'color-sample',
    templateUrl: './color-sample.component.html',
    styleUrls: ['./color-sample.component.scss']
})
export class ColorSampleComponent implements OnInit {
    @Input() color;
    
    constructor() { }

    ngOnInit() {
    }

}
