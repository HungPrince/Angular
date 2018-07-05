import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { HeroSwitchComponent } from './template-component/structure-directive/hero-switch.component';
import { ExponentialStrengthPipe } from './template-component/pipe/exponential-strength.pipe';
import { AnimationsComponent } from './template-component/animations/animations.component';
import { PipeComponent } from './template-component/pipe/pipe.component';
import { AttributeDirectiveComponent } from './template-component/attribute-directive/attribute-directive.component';
import { StructureDirectiveComponent } from './template-component/structure-directive/structure-directive.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
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
        HeroSwitchComponent,
        ExponentialStrengthPipe,
        PipeComponent,
        AnimationsComponent,
        AttributeDirectiveComponent,
        StructureDirectiveComponent,
    ],
  
    exports: [
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
        HeroSwitchComponent,
        ExponentialStrengthPipe,
        PipeComponent,
        AnimationsComponent,
        AttributeDirectiveComponent,
        StructureDirectiveComponent,
    ]
})
export class ComponentModule { }
