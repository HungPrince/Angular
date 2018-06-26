import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../../../interfaces/ad';

@Component({
    selector: 'app-hero-profile',
    templateUrl: './hero-profile.component.html',
    styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements Ad {
    @Input() data: any;
    constructor() { }

    ngOnInit() {
    }

}
