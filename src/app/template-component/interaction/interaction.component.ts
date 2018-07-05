import { Component } from '@angular/core';
import { HEROES } from '../../constants/constant';

@Component({
    selector: 'app-interaction',
    templateUrl: './interaction.component.html',
    styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent {
  
    heroes = HEROES;
    master: string = "Master";
    agreed: number = 0;
    disagreed: number = 0;

    onVoted(agreed) {
        agreed ? this.agreed++ : this.disagreed++;
    }

}
