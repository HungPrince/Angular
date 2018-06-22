import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroComponent,
        HeroDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
