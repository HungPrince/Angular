import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroList1Component } from "./hero-list.component";
import { HeroDetail1Component } from "./hero-detail.component";

const heroRoutes: Routes = [
    { path: 'heroes', redirectTo: '/superheroes' },
    { path: 'hero/:id', redirectTo: '/superhero:id' },
    { path: 'superheroes', component: HeroList1Component },
    { path: 'superhero/:id', component: HeroDetail1Component }
]

@NgModule({
    imports: [
        RouterModule.forChild(heroRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HeroesRoutingModule {

}