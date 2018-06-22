import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../../models/hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero
    @Output() displayHero = new EventEmitter<Hero>();
    constructor() { }

    ngOnInit() {
    }

    countClickHero(hero: Hero) {
        this.displayHero.emit(this.hero);
    }
}
