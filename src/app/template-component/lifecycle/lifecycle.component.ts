import { Component, Input, SimpleChanges} from '@angular/core';

import { LoggerService } from './../../services/logger/logger.service';

let nextId = 1;

export class Lifecycle {

    constructor(private logger: LoggerService) { }
    //#region ngOnInit
    ngOnInit() {
        this.logIt(`onInit`);
    }
    //#endregion ngOnInit
    logIt(msg: string) {
        this.logger.log(`#${nextId++}${msg}`);
    }
}

@Component({
    selector: 'app-lifecycle',
    templateUrl: './lifecycle.component.html',
    styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent extends Lifecycle {

    @Input() name: string;
    private verb = 'initialized';

    constructor(logger: LoggerService) {
        super(logger);
        let is = this.name ? 'is' : 'is not';
        this.logIt(`name ${is} known at contruction`);
    }

    ngOnChanges(changes: SimpleChanges) {
        let changeMsgs: string[] = [];
        for (let propName in changes) {
            if (propName === 'name') {
                let name = changes[propName].currentValue;
                changeMsgs.push(`name ${this.verb} to ${name}`);
            } else {
                changeMsgs.push(propName + ' ' + this.verb);
            }
        }
        this.logIt(`On change ${changeMsgs.join('; ')}`);
        this.verb = 'changed';
    }

    ngDoCheck(){
        this.logIt(`Do check`);
    }

    ngAfterContentInit() {
        this.logIt(`After content init`);
    }

    ngAfterContentChecked() {
        this.logIt(`After content checked`);
    }

    ngAfterViewInit() {
        this.logIt(`After view init`);
    }

    ngAfterViewChecked() {
        this.logIt(`After view checked`);
    }

    ngOnDestroy() {
        this.logIt(`On destroy`);
    }
}
