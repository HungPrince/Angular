import { Injectable, Injector, ApplicationRef, ComponentFactoryResolver } from '@angular/core';
import { AngularElemementComponent } from '../../template-component/interaction/angular-elemement/angular-elemement.component';

@Injectable({
    providedIn: 'root'
})
export class PopupService {

    constructor(
        private injector: Injector,
        private applicationRef: ApplicationRef,
        private componentFactoryResolver: ComponentFactoryResolver) {

    }

    showAsComponent(message: string) {
        const popup = document.createElement('popup-component');
        const factory = this.componentFactoryResolver.resolveComponentFactory(AngularElemementComponent);
        const popupComponentRef = factory.create(this.injector, [], popup);
        this.applicationRef.attachView(popupComponentRef.hostView);
        popupComponentRef.instance.closed.subscribe(() => {
            document.removeChild(popup);
            this.applicationRef.detachView(popupComponentRef.hostView);
        })
        popupComponentRef.instance.message = message;
        document.body.appendChild(popup);
    }

    showAsElement(message: string) {
        const popupEl = document.createElement('popup-element');
        popupEl.addEventListener('closed', () => {
            document.body.removeChild(popupEl);
        })
        popupEl.innerText = message;
        document.body.appendChild(popupEl);
    }
}
