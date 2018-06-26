import { Component, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdItem } from '../../models/ad-item';
import { AdDirective } from '../../directives/ad.directive';
import { Ad } from '../../interfaces/ad';

@Component({
    selector: 'app-dynamic-component',
    templateUrl: './dynamic-component.component.html',
    styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent {
    @Input() ads: AdItem[];
    currentAdIndex = -1;
    @ViewChild(AdDirective) adHost: AdDirective
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        this.loadComponent();
        this.getAds();
    }

    ngDestroys() {
        clearInterval(this.interval);
    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        let adItem = this.ads[this.currentAdIndex];

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
        let viewContainerRef = this.adHost.viewContainerRef;
        viewContainerRef.clear();
        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<Ad>componentRef.instance).data = adItem.data;
    }

    getAds() {
        this.interval = setInterval(() => {
            this.loadComponent();
        }, 3000)
    }

}
