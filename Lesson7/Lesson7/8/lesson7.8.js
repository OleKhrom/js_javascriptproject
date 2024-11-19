class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Cinderella1', 25, 30),
    new Cinderella('Cinderella2', 26, 31),
    new Cinderella('Cinderella3', 27, 32),
    new Cinderella('Cinderella4', 28, 33),
    new Cinderella('Cinderella5', 29, 35),
    new Cinderella('Cinderella6', 30, 36),
    new Cinderella('Cinderella7', 30, 36),
    new Cinderella('Cinderella8', 30, 36),
    new Cinderella('Cinderella9', 30, 36),
    new Cinderella('Cinderella10', 30, 36),
];

let prince = new Prince('Cinderella1', 25, 30);
let cinderella = cinderellas.find(cinderella => cinderella.footSize === prince.shoesSize);

console.log(new Prince('Cinderella1', 25, 30));

