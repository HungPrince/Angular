import { Component } from '@angular/core';
import { HeroForm } from '../models/hero-form';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
    clickMessage = '';
    values = '';
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model = new HeroForm(22, 'HungPrince', this.powers[0], 'Chuck Overstreet');
    submited = false;

    newHero() {
        this.model = new HeroForm(22, '', '');
    }
    onSubmit() {
        this.submited = true;
    }

    onClickMe() {
        this.clickMessage = 'You are my hero!';
    }

    update(value: string) {
        this.values += value + ' | ';
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
