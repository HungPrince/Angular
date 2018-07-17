import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './rounting-navigation/error/not-found.component';
import { CrisisListComponent } from './rounting-navigation/crisis-list.component';
import { DetailComponent } from './forms/detail/detail.component';
import { HeroListComponent } from './forms/hero-list/hero-list.component';

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
    },
    { path: 'hero/:id', component: DetailComponent },
    { path: 'heroes', component: HeroListComponent, data: { title: 'Heroes List' } },
    { path: 'crisis-list', component: CrisisListComponent },
    { path: '', redirectTo: 'heroes', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { enableTracing: true })
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
