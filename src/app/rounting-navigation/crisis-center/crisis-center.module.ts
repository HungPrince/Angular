import { NgModule } from "../../../../node_modules/@angular/core";
import { CommonModule } from "../../../../node_modules/@angular/common";
import { FormsModule } from "../../../../node_modules/@angular/forms";
import { CrisisCenterRoutingModule } from "./crisis-center-routing.module";
import { CrisisCenterComponent } from "./crisis-center.component";
import { CrisisListComponent } from "../crisis-list.component";
import { CrisisCenterHomeComponent } from "./crisis-center-home.component";
import { CrisisDetailComponent } from "./crisis-detail.component";
import { CrisisService } from "./crisis.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CrisisCenterRoutingModule
    ],
    exports: [
        CrisisCenterComponent,
        CrisisListComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent
    ],
    providers: [
        CrisisService
    ]
})

export class CrisisCenterModule {

}

