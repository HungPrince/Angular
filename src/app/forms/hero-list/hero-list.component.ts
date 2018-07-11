import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Hero } from '../../models/data-model';
import { HeroService } from '../../services/hero/hero.service';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
    heroes: Observable<Hero[]>;
    isLoading = false;
    selectedHero: Hero;
    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.isLoading = true;
        this.heroes = this.heroService.getHeroes().pipe((finalize(() => this.isLoading = false)))
        this.selectedHero = undefined;
    }

    select(hero: Hero) {
        this.selectedHero = hero;
    }

}
