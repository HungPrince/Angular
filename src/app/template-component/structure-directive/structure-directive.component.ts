import { Component } from '@angular/core';
import { HEROES } from '../../constants/constant';
import { Hero } from '../../models/hero';

@Component({
    selector: 'app-structure-directive',
    templateUrl: './structure-directive.component.html',
    styleUrls: ['./structure-directive.component.scss']
})
export class StructureDirectiveComponent {
    heroes = HEROES;
    hero = this.heroes[0];

    condition: boolean = false;
    logs: string[] = [];
    showSad = true;
    status = 'ready';

    trackById(index: number, hero: Hero): number {
        return hero.id;
    }
}
