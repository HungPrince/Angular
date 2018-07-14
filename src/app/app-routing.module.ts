import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'customers',
        loadChildren: './ng-module/customers/customers.module#CustomersModule'
    },
    {
        path: 'orders',
        loadChildren: './ng-module/orders//orders.module#OrdersModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
