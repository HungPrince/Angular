import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from './template-component/hero/hero.component';
import { HeroDetailComponent } from './template-component/hero/hero-detail/hero-detail.component';
import { SpyDirective } from './directives/spy.directive';
import { LifecycleComponent } from './template-component/lifecycle/lifecycle.component';
import { InteractionComponent } from './template-component/interaction/interaction.component';
import { ChildInteractionComponent } from './template-component/interaction/child-interaction/child-interaction.component';
import { CountdownViewchildParentComponent } from './template-component/interaction/countdown-viewchild-parent/countdown-viewchild-parent.component';
import { CountdownTimerComponent } from './template-component/interaction/countdown-timer/countdown-timer.component';
import { MissioncontrolComponent } from './template-component/interaction/missioncontrol/missioncontrol.component';
import { AstronautComponent } from './template-component/interaction/astronaut/astronaut.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroComponent,
        HeroDetailComponent,
        SpyDirective,
        LifecycleComponent,
        InteractionComponent,
        ChildInteractionComponent,
        CountdownViewchildParentComponent,
        CountdownTimerComponent,
        MissioncontrolComponent,
        AstronautComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
