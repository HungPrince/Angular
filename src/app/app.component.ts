import { Component, Injector } from '@angular/core';
import { PopupService } from './services/element/popup.service';
import { AdService } from './services/ad/ad.service';
import { AdItem } from './models/ad-item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    hero: string = "HungPrince";
    ads: AdItem[];

    constructor(private injector: Injector, public popup: PopupService, private adService: AdService) {

    }

    ngOnInit() {
        this.ads = this.adService.getAds();
        console.log(this.ads);
    }
}
