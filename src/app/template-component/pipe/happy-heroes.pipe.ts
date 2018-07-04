import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../models/hero';

@Pipe({
    name: 'happyHeroes'
})
export class HappyHeroesPipe implements PipeTransform {

    transform(heroes: Hero[]): Hero[] {
        console.log(heroes);
        return heroes.filter(hero => hero.emotion === 'happy');
    }
}