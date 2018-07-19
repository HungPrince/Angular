import { Component, HostBinding } from "@angular/core";
import { slideInDownAnimation } from "../animation";
import { Observable } from "rxjs";
import { Hero, HeroService } from "./hero.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";


@Component({
    template: `
        <h2>HEROES</h2>
        <div *ngIf="hero$ | async as hero">
            <h3>{{hero.name}}</h3>
            <div>
                <label for="">Id: {{hero.id}}</label>
            </div>
            <div>
                <label for="">Name :</label>
                <input [(ngModel)]="hero.name" placeholder="name" type="text">
            </div>

            <p>
                <button (click)="gotoHeroes(hero)">Back</button>
            </p>
        </div>
    `,
    animations: [slideInDownAnimation]
})

export class HeroDetail1Component {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    hero$: Observable<Hero>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService
    ) { }

    ngOnInit() {
        this.hero$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.service.getHero(params.get('id')))
        );
    }

    gotoHeroes(hero: Hero) {
        let heroId = hero ? hero.id : null;
        this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    }
}