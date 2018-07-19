import { Injectable } from "../../../node_modules/@angular/core";
import { Observable, of } from "../../../node_modules/rxjs";

@Injectable()

export class DialogService {

    confirm(message?: string): Observable<boolean> {
        const confirmation = window.confirm(message || 'Is it Ok?');
        return of(confirmation);
    }
}