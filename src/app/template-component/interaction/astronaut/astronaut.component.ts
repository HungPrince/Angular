import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MissionService } from '../../../services/mission/mission.service';

@Component({
    selector: 'app-astronaut',
    templateUrl: './astronaut.component.html',
    styleUrls: ['./astronaut.component.scss']
})
export class AstronautComponent {

    @Input() astronuat: string;
    mission = '<no mission announced>'
    confirmed = false;
    announced = false;
    subcription: Subscription;

    constructor(private missionService: MissionService) {
        this.subcription = missionService.missionAnnounced$.subscribe(
            mission => {
                this.mission = mission;
                this.announced = true;
                this.confirmed = false;
            }
        )
    }

    confirm() {
        this.confirmed = true;
        this.missionService.confirmMission(this.astronuat);
    }

    ngOnDestroys() {
        this.subcription.unsubscribe();
    }
}
