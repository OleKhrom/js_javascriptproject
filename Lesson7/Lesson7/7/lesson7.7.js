class Car {
    constructor(model, produce, year, maxSpeed, engineVolume) {
        this.model = model;
        this.produce = produce;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        for (let key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) {
            this.speed = newSpeed + this.speed;
        }
    }
    changeYear(newYear) {
        if (newYear > 0)
            this.year = newYear;
    }
    addDriver(newDriver) {
        if (newDriver){
            this.driver = newDriver;
        }
    }
}


    let car = new Car('Audi', 'GerAudi', 2023, 300, 50);
    console.log(car);

    car.drive();
    car.info();
    car.increaseMaxSpeed(400);
    car.addDriver({});
    car.changeYear(2012);

    console.log(car);
