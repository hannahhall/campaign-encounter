export class Monster {
    [x: string]: any;
    index: string;
    name: string;
    senses: {key:string}
    speed: {key:string}
    
    constructor(props: any) {
        this.index = props.index;
        this.name = props.name;

        this.size = props.size;
        this.type = props.type;
        this.subtype = props.subtype;
        this.alignment = props.alignment;
        this.armorClass = props.armor_class;
        this.hitPoints = props.hit_points;
        this.hitDice = props.hit_dice;
        this.speed = props.speed;
        this.strength = props.strength;
        this.dexterity = props.dexterity;
        this.constitution = props.constitution;
        this.intelligence = props.intelligence;
        this.wisdom = props.wisdom;
        this.charisma = props.charisma;
        this.proficiencies = props.proficiencies;
        this.damageVulnerabilities = props.damage_vulnerabilities;
        this.damageResistance = props.damage_resistance;
        this.damageImmunities = props.damage_immunities;
        this.conditionImmunities = props.condition_immunities;
        this.senses = props.senses;
        this.languages = props.languages;
        this.challengeRating = props.challenge_rating;
        this.specialAbilities = props.special_abilities;
        this.actions = props.actions;
        this.legendaryActions = props.legendary_actions;
        this.reactions = props.reactions;
    }
}
