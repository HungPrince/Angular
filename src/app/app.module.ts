import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './template-component/hero/hero.component';
import { HeroDetailComponent } from './template-component/hero/hero-detail/hero-detail.component';
import { SpyDirective } from './directives/spy.directive';
import { LifecycleComponent } from './template-component/lifecycle/lifecycle.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroComponent,
        HeroDetailComponent,
        SpyDirective,
        LifecycleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
