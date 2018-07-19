import { Component, HostBinding } from "../../../../node_modules/@angular/core";
import { slideInDownAnimation } from "../animation";
import { Crisis } from "./crisis.service";
import { ActivatedRoute, Router } from "../../../../node_modules/@angular/router";
import { DialogService } from "../dialog.service";
import { Observable } from "../../../../node_modules/rxjs";

@Component({
    template: `
    <div *ngIf="crisis">
    <h3>"{{ editName }}"</h3>
    <div>
        <label>Id: </label>{{ crisis.id }}</div>
    <div>
        <label>Name: </label>
        <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <p>
        <button (click)="save()">Save</button>
        <button (click)="cancel()">Cancel</button>
    </p>
  </div>
    `,
    styles: ['input {width: 20em}'],
    animations: [slideInDownAnimation]
})

export class CrisisDetailComponent {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';

    crisis: Crisis;
    editName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public dialogService: DialogService
    ) {
        this.route.data.subscribe((data: { crisis: Crisis }) => {
            this.editName = data.crisis.name;
            this.crisis = data.crisis;
        })
    }

    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    canDeactive(): Observable<boolean> | boolean {
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        return this.dialogService.confirm('Discard changes ?');
    }

    gotoCrises() {
        let crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['.../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    }
}

