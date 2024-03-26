export class FarmUnit {
    name: string
    stars: number
    gear_level?: number
    relic_level?: number
    speed?: number
    health?: number
    protection?: number
    physical?: number

    constructor(name: string, stars: number, gear_level?: number, relic_level?: number, speed?: number, health?: number, protection?: number, physical?: number) {
        this.name = name;
        this.stars = stars;
        this.gear_level = gear_level;
        this.relic_level = relic_level;
        this.speed = speed;
        this.health = health;
        this.protection = protection;
        this.physical = physical;
    }
}

export const spacer = new FarmUnit('Darth Revan', 7, 13, 7, 298, 69940, 43389, 6349, 10259, 53, 67, 60,);

