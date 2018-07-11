import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { STATES, Address, HEROES, Hero } from '../../models/data-model';
import { HeroService } from '../../services/hero/hero.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    @Input() hero: Hero;
    heroForm: FormGroup;
    states = STATES;

    nameChangeLog: string[] = [];

    constructor(private fb: FormBuilder, private heroService: HeroService) {
        this.createForm();
        this.logNameChange();
    }

    createForm() {
        this.heroForm = this.fb.group({
            name: ['', Validators.required],
            secretLairs: this.fb.array([]),
            power: '',
            sidekick: ''
        })
    }

    get secretLairs(): FormArray {
        return this.heroForm.get('secretLairs') as FormArray;
    }

    addLairs() {
        this.secretLairs.push(this.fb.group(new Address()));
    }

    removeLairs(index: number) {
        this.secretLairs.removeAt(index);
    }

    setAddresses(addresses: Address[]) {
        const addressFGs = addresses.map(address => this.fb.group(address));
        const addressFormArray = this.fb.array(addressFGs);
        this.heroForm.setControl('secretLairs', addressFormArray);
    }

    rebuildForm() {
        this.heroForm.reset({
            name: this.hero.name,
        })
        this.setAddresses(this.hero.addresses);
    }

    logNameChange() {
        const nameControl = this.heroForm.get('name');
        nameControl.valueChanges.forEach(
            (value: string) => {
                this.nameChangeLog.push(value);
            }
        )
    }

    onSubmit() {
        this.hero = this.prepareHero();
        this.heroService.updateHero(this.hero).subscribe(
            hero => console.log(hero),
            error => console.log(error)
        );
        this.rebuildForm();
    }

    revert() {
        this.rebuildForm();
    }

    prepareHero(): Hero {
        const formModel = this.heroForm.value;
        const secretLairDeepCopy: Address[] = formModel.secretLairs.map(
            (address: Address) => Object.assign({}, address)
        );

        const saveHero: Hero = {
            id: this.hero.id,
            name: formModel.name as string,
            addresses: secretLairDeepCopy
        }
        return saveHero;
    }

    ngOnChanges() {
        this.rebuildForm();
    }

}
