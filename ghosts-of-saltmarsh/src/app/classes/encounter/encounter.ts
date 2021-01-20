export class Encounter {
    id: any;
    round: any;
    name: any;
    description: any;
    order: any;

    constructor(props: any) {
        this.id = props.id;
        this.round = props.round;
        this.name = props.name;
        this.description = props.description;
        this.order = props.order;
    }
}
