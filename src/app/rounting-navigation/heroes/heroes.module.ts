import { NgModule } from "@angular/core";
import { HeroService } from "../../services/hero/hero.service";
import { HeroList1Component } from "./hero-list.component";
import { HeroDetail1Component } from "./hero-detail.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeroesRoutingModule } from "./heroes-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroesRoutingModule
    ],
    declarations: [
        HeroList1Component,
        HeroDetail1Component
    ],
    providers: [
        HeroService
    ]
})

export class HeroesModule {

}

