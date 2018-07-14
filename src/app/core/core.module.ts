import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceConfig, UserService } from '../services/user/user.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [UserService]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: UserServiceConfig): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                { provide: UserServiceConfig, useValue: config }
            ]
        };
    }
}
