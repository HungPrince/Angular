import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {

    @Input('appHighlight') highLightColor : string;
    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = this.highLightColor;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highLightColor || 'yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

}
