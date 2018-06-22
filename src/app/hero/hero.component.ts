import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    title = 'Tours of Heroes';
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(1, 'Bombasto'),
        new Hero(1, 'Magneta'),
        new Hero(1, 'Tornado'),
    ]
    myHero = this.heroes[0];

    constructor() { }

    ngOnInit() {
    }

    countHero(hero: Hero) {
       this.myHero = hero;
    }

}
