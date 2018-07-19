import { NgModule } from "../../../../node_modules/@angular/core";
import { HeroService } from "../../services/hero/hero.service";
import { HeroListComponent } from "../../forms/hero-list/hero-list.component";
import { HeroDetailComponent } from "../../template-component/hero/hero-detail/hero-detail.component";
import { CommonModule } from "../../../../node_modules/@angular/common";
import { FormsModule } from "../../../../node_modules/@angular/forms";
import { HeroesRoutingModule } from "./heroes-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroesRoutingModule
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService
    ]
})

export class HeroesModule {

}

