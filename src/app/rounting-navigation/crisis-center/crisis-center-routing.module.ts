import { Routes, RouterModule } from "../../../../node_modules/@angular/router";
import { CrisisCenterComponent } from "./crisis-center.component";
import { CrisisDetailComponent } from "./crisis-detail.component";
import { CanDeactiveGuard } from "../can-deactive-guard.service";
import { CrisisDetailResolver } from "./crisis-detail-resolver.service";
import { CrisisCenterHomeComponent } from "./crisis-center-home.component";
import { NgModule } from "../../../../node_modules/@angular/core";

const CrisisCenterRoutes: Routes = [
    {
        path: '',
        component: CrisisCenterComponent,
        children: [
            {
                path: '',
                component: CrisisCenterHomeComponent,
                children: [
                    {
                        path: 'id',
                        component: CrisisDetailComponent,
                        canActivate: [CanDeactiveGuard],
                        resolve: {
                            crisis: CrisisDetailResolver
                        }
                    },
                    {
                        path: '',
                        component: CrisisCenterHomeComponent
                    }
                ]
            },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(CrisisCenterRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CrisisDetailResolver
    ]
})

export class CrisisCenterRoutingModule {

}