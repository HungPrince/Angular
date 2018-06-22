import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Tours of Heroes';
    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(1, 'Bombasto'),
        new Hero(1, 'Magneta'),
        new Hero(1, 'Tornado'),
    ]
    myHero = this.heroes[0];
}
