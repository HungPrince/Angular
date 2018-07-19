import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './rounting-navigation/error/not-found.component';
import { CrisisListComponent } from './rounting-navigation/crisis-list.component';
import { DetailComponent } from './forms/detail/detail.component';
import { HeroListComponent } from './forms/hero-list/hero-list.component';

import { Routes, RouterModule } from '@angular/router';
import { ComposeMessageComponent } from './rounting-navigation/compose-message.component';
import { AuthGuard } from './rounting-navigation/auth-guard.service';
import { SelectivePreloadStrategy } from './rounting-navigation/selective-preload-strategy';
import { CanDeactiveGuard } from './rounting-navigation/can-deactive-guard.service';

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
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    },
    {
        path: 'admin',
        loadChildren: './rounting-navigation/admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'crisis-center',
        loadChildren: './rounting-navigation/crisis-center/crisis-center.module#CrisisCenterModule',
        data: { preload: true }
    },
    { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                enableTracing: true, // <-- debugging purposes only
                preloadingStrategy: SelectivePreloadStrategy,

            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactiveGuard,
        SelectivePreloadStrategy
    ]
})
export class AppRoutingModule { }
