import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { SelectivePreloadStrategy } from "../selective-preload-strategy";

@Component({
    template: `
    <p>Dashboard</p>
    
    <p>Session ID: {{ sessionID | async }}</p>
    <a id="anchor"></a>
    <p>Token: {{ token | async }}</p>

    Preload modules: 
    <ul>
        <li *ngFor="let module of modules">{{ module }}</li>
    </ul>
    `
})

export class AdminDashboardComponent {
    sessionID: Observable<string>;
    token: Observable<string>;
    modules: string[];

    constructor(
        private route: ActivatedRoute,
        private preloadStrategy: SelectivePreloadStrategy
    ){}
}