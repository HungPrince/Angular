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
import { AngularElemementComponent } from './template-component/interaction/angular-elemement/angular-elemement.component';
import { DynamicComponentComponent } from './template-component/dynamic-component/dynamic-component.component';
import { HeroJobAdComponent } from './template-component/dynamic-component/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './template-component/dynamic-component/hero-profile/hero-profile.component';
import { AdDirective } from './directives/ad.directive';
import { AttributeDirectiveComponent } from './template-component/attribute-directive/attribute-directive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StructureDirectiveComponent } from './template-component/structure-directive/structure-directive.component';
import { UnlessDirective } from './directives/unless.directive';
import { HeroSwitchComponent } from './template-component/structure-directive/hero-switch.component';

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
        AstronautComponent,
        AngularElemementComponent,
        DynamicComponentComponent,
        HeroJobAdComponent,
        HeroProfileComponent,
        AdDirective,
        AttributeDirectiveComponent,
        HighlightDirective,
        StructureDirectiveComponent,
        UnlessDirective,
        HeroSwitchComponent
    ],
    entryComponents:[
        HeroJobAdComponent,
        HeroProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
