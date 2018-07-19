import { Injectable } from "../../../node_modules/@angular/core";
import { PreloadingStrategy, Route } from "../../../node_modules/@angular/router";
import { Observable, of } from "../../../node_modules/rxjs";

@Injectable()

export class SelectivePreloadStrategy implements PreloadingStrategy {
    preloadedModule: string[] = [];

    preload(route: Route, load: ()=>Observable<any>): Observable<any> {
        if(route.data && route.data['preload']){
            this.preloadedModule.push(route.path);
            console.log('preloaded:' + route.path);
    
            return load();
        }else {
            return of(null);
        }
    }
}