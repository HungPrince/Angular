import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Hero, HEROES } from '../../models/data-model';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    delayMs = 500;
    constructor() { }

    getHeroes(): Observable<Hero[]> {
        return of(HEROES).pipe(delay(this.delayMs));
    }

    updateHero(hero: Hero): Observable<Hero> {
        const oldHero = HEROES.find(h => h.id === hero.id);
        const newHero = Object.assign(oldHero, hero);
        return of(newHero).pipe(delay(this.delayMs));
    }
}
