import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

export interface CanComponentDeactive {
    canDeactive: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()

export class CanDeactiveGuard implements CanDeactivate<CanComponentDeactive> {
    canDeactivate(component: CanComponentDeactive) {
        return component.canDeactive ? component.canDeactive() : true;
    }
}