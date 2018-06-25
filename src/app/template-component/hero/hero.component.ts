import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../../constants/constant';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    title = 'Tours of Heroes';
    heroes = HEROES;
    myHero = this.heroes[0];

    constructor() { }

    ngOnInit() {    
    }

    countHero(hero: Hero) {
        this.myHero = hero;
    }

}
