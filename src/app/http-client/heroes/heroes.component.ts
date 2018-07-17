import { Component } from "@angular/core";
import { Hero } from "./hero";
import { HeroesService } from "./heroes.service";

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss'],
    providers: [HeroesService]
})

export class HeroesComponent {
    heroes: Hero[];
    editHero: Hero;

    constructor(private heroesService: HeroesService) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    add(name: string): void {
        this.editHero = undefined;
        name = name.trim();
        if (!name) {
            return;
        }

        const newHero: Hero = { name } as Hero;
        this.heroesService.addHero(newHero).subscribe(hero => this.heroes.push(hero));
    }

    edit(hero: Hero) {
        this.editHero = hero;
    }

    search(searchTerm: string) {
        this.editHero = undefined;
        if (searchTerm) {
            this.heroesService.searchHeroes(searchTerm).subscribe(heroes => this.heroes = heroes);
        }
    }

    update() {
        if (this.editHero) {
            this.heroesService.updateHero(this.editHero).subscribe(hero => {
                const ix = hero ? this.heroes.findIndex(h => h.id === hero.id) : -1;
                if (ix > -1) {
                    this.heroes[ix] = this.editHero;
                }
            })
            this.editHero = undefined;
        }
    }

    delete(he: Hero) {
        this.heroesService.deleteHero(he.id).subscribe(
            hero => {
                if (hero === null) {
                    const ix = this.heroes.findIndex(h => h.id === he.id);
                    this.heroes.splice(ix, 1);
                }
            }
        );
    }
}