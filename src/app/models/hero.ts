export class Hero {
    constructor(public id: number, public name: string, public emotion: string, public state: string) { }

    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}
