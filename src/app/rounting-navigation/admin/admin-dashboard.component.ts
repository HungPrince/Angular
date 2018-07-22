import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { SelectivePreloadStrategy } from "../selective-preload-strategy";
import { map } from "../../../../node_modules/rxjs/operators";

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

export class AdminDashboardComponent implements OnInit {
    sessionID: Observable<string>;
    token: Observable<string>;
    modules: string[];

    constructor(
        private route: ActivatedRoute,
        private preloadStrategy: SelectivePreloadStrategy
    ) {
        this.modules = this.preloadStrategy.preloadedModule;
    }

    ngOnInit() {
        console.log('abc');
        this.sessionID = this.route.queryParamMap.pipe(
            map(params => params.get('session_id') || 'None')
        )

        this.token = this.route.fragment.pipe(
            map(fragment => fragment || 'None')
        )
    }
}