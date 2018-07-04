import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../constants/constant';

@Component({
    selector: 'app-pipe',
    templateUrl: './pipe.component.html',
    styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {
    birthday = new Date(1994, 7, 8);
    power = 2;
    factor = 5;
    heroes = HEROES;
}
