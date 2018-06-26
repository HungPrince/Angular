import { Component, OnInit, Input } from '@angular/core';
import { Ad } from '../../../interfaces/ad';

@Component({
    selector: 'app-hero-job-ad',
    templateUrl: './hero-job-ad.component.html',
    styleUrls: ['./hero-job-ad.component.scss']
})
export class HeroJobAdComponent implements Ad {

    @Input() data: any;
    constructor() { }

    ngOnInit() {
    }

}
