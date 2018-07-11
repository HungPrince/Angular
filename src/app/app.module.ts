import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AdDirective } from './directives/ad.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { SpyDirective } from './directives/spy.directive';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';

import { HappyHeroesPipe } from './template-component/pipe/happy-heroes.pipe';
import { FetchJsonPipe } from './template-component/pipe/fetch-json.pipe';
import { ExponentialStrengthPipe } from './template-component/pipe/exponential-strength.pipe';

import { AppComponent } from './app.component';
import { HeroComponent } from './template-component/hero/hero.component';
import { HeroDetailComponent } from './template-component/hero/hero-detail/hero-detail.component';
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
import { AttributeDirectiveComponent } from './template-component/attribute-directive/attribute-directive.component';
import { StructureDirectiveComponent } from './template-component/structure-directive/structure-directive.component';
import { HeroSwitchComponent } from './template-component/structure-directive/hero-switch.component';
import { PipeComponent } from './template-component/pipe/pipe.component';
import { AnimationsComponent } from './template-component/animations/animations.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { DetailComponent } from './forms/detail/detail.component';
import { HeroListComponent } from './forms/hero-list/hero-list.component';
import { DynamicsComponent } from './forms/dynamics/dynamics.component';
import { DynamicFormQuestionComponent } from './forms/dynamic-form-question/dynamic-form-question.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroComponent,
        HeroDetailComponent,
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
        AttributeDirectiveComponent,
        StructureDirectiveComponent,
        HeroSwitchComponent,
        PipeComponent,
        AnimationsComponent,

        SpyDirective,
        AdDirective,
        HighlightDirective,
        UnlessDirective,
        ForbiddenValidatorDirective,
        IdentityRevealedValidatorDirective,

        ExponentialStrengthPipe,
        HappyHeroesPipe,
        FetchJsonPipe,
        FormsComponent,
        ReactiveComponent,
        DetailComponent,
        HeroListComponent,
        DynamicsComponent,
        DynamicFormQuestionComponent,
    ],
    entryComponents: [
        HeroJobAdComponent,
        HeroProfileComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }