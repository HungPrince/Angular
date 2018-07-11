import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../../services/question-control/question-control.service';
import { QuestionBase } from '../../models/question-base';

@Component({
    selector: 'app-dynamics',
    templateUrl: './dynamics.component.html',
    styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent implements OnInit {

    @Input() questions: QuestionBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService) {

    }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }

}
