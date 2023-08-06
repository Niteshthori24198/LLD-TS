


export class Entity {
    health: number;
    strength: number;
    defense: number;
    name: string;

    constructor(health: number, strength: number, defense: number, name: string) {
        this.health = health;
        this.strength = strength;
        this.defense = defense;
        this.name = name;
    }

    movement() { }
}


// Different Player Characters
export class Player extends Entity {

    level: number;
    constructor(health: number, strength: number, defense: number, name: string) {
        super(health, strength, defense, name)
        this.level = 1
    }

    attack() { }
}

export class Swordsman extends Player {

    constructor(health: number, strength: number, defense: number) {
        super(health, strength, defense, "Swordsman")
    }

    slashAttack() { }

}
export class Mage extends Player {

    constructor(health: number, strength: number, defense: number) {
        super(health, strength, defense, "Mage")
    }

    magicAttack() { }

}

export class Spearman extends Player {
    constructor(health: number, strength: number, defense: number) {
        super(health, strength, defense, "Spearman")
    }


    stabAttack() { }
}

// All Enemies
export class Enemy extends Entity {

    followPlayer() { }
}

export class Zombies extends Enemy {

    constructor(health: number, strength: number, defense: number) {
        super(health, strength, defense, "Zobmie")
    }
    poisonAttack() { }

}

export class Werewolf extends Enemy{
    constructor(health: number, strength: number, defense: number) {
        super(health, strength, defense, "Werewolf")

    }

    biteAttack(){}
    roar(){}

}
