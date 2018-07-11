import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../../models/question-base';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-question',
    templateUrl: './dynamic-form-question.component.html',
    styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {

    constructor() { }

    @Input() question: QuestionBase<any>;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.question.key].valid; }

}
