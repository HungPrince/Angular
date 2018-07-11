import { Injectable } from '@angular/core';
import { QuestionBase } from '../../models/question-base';
import { QuestionSelectbox } from '../../models/question-selectbox';
import { QuestionTextbox } from '../../models/question-textbox';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {

    constructor() { }

    getQuestions() {
        let questions: QuestionBase<any>[] = [

            new QuestionSelectbox({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),

            new QuestionSelectbox({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),

            new QuestionTextbox({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];
        return questions.sort((a, b) => a.order - b.order);
    }
}
