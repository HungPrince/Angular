import { HappyHeroesPipe } from './happy-heroes.pipe';

describe('HappheroesPipe', () => {
    it('create an instance', () => {
        const pipe = new HappyHeroesPipe();
        expect(pipe).toBeTruthy();
    });
});
