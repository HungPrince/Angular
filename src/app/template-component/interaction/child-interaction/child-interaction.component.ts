import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../../models/hero';

@Component({
    selector: 'app-child-interaction',
    templateUrl: './child-interaction.component.html',
    styleUrls: ['./child-interaction.component.scss']
})
export class ChildInteractionComponent {
    private _hero: Hero;
    didVote = false;
    public variableLocal: string = 'test variable local';
    
    @Input()
    set hero(hero: Hero) {
        this._hero = hero.name ? hero : new Hero(0, 'HungPrince', 'happy', 'active');
    }
    get hero(): Hero {
        return this._hero;
    };
    @Input('master') masterName: string;
    @Output() voted = new EventEmitter<boolean>();

    constructor() { }

    vote(agreed: boolean) {
        this.voted.emit(agreed);
        this.didVote = true;
    }

    changeVariableLocal() {
        this.variableLocal = 'test done variable local';
    }
}
