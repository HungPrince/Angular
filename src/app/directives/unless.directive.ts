import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {
    private hasView = false;
    @Input() set appUnless(condition: boolean) {
        if (!condition && !this.hasView) {
            this.viewContanerRef.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (condition && this.hasView) {
            this.viewContanerRef.clear();
            this.hasView = false;
        }
    }
    constructor(private templateRef: TemplateRef<any>, private viewContanerRef: ViewContainerRef) { }

}
