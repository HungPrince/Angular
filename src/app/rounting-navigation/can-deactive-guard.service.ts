import { Observable } from "../../../node_modules/rxjs";
import { Injectable } from "../../../node_modules/@angular/core";
import { CanDeactivate } from "../../../node_modules/@angular/router";

export interface CanComponentDeactive {
    canDeactive: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()

export class CanDeactiveGuard implements CanDeactivate<CanComponentDeactive> {
    canDeactivate(component: CanComponentDeactive) {
        return component.canDeactive ? component.canDeactive() : true;
    }
}