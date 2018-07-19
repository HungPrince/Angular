import { NgModule } from "../../../../node_modules/@angular/core";
import { RouterModule, Routes } from "../../../../node_modules/@angular/router";
import { HeroListComponent } from "../../forms/hero-list/hero-list.component";
import { HeroDetailComponent } from "../../template-component/hero/hero-detail/hero-detail.component";

const heroRoutes: Routes = [
    { path: 'heroes', redirectTo: '/superheroes' },
    { path: 'hero/:id', redirectTo: '/superhero:id' },
    { path: 'superheroes', component: HeroListComponent },
    { path: 'superhero/:id', component: HeroDetailComponent }
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