import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ColorSampleComponent } from './color-sample/color-sample.component';
import { ColorPickerDirective } from 'ngx-color-picker';

@Component({
    selector: 'app-viewchild',
    templateUrl: './viewchild.component.html',
    styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit {
    primary = '#1976d2';

    @ViewChild('primaryColorSample') primarySampleComponent: ColorSampleComponent;
    @ViewChild('primaryColorSample', { read: ElementRef }) primarySampleDiv: ElementRef;

    @ViewChild('primaryInput') primaryInput: ElementRef;
    @ViewChild('primaryInput', { read: ColorPickerDirective }) colorPickerDirective: ColorPickerDirective;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        console.log('Values on ngAfterViewInit():');
        console.log('primaryColorSample:', this.primarySampleComponent);
        console.log('primarySampleDiv:', this.primarySampleDiv);
        console.log('primaryInput:', this.primaryInput);
    }

    openColorPicker() {
        this.colorPickerDirective.openDialog();
    }

}
