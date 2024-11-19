function Car(model, produce, year, maxSpeed, engineVolume) {
    this.model = model;
    this.produce = produce;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function () {
        for (let key in this) {
            console.log(key, this[key]);
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) {}
        this.maxSpeed = maxSpeed + maxSpeed;
    };

    this.changeYear = function (newYear) {
        if (newYear > 0)
        this.year = newYear;
    };

    this.addDriver = function (newDriver) {
        if (newDriver){
            this.driver = newDriver;
    }
    };

}
 let car = new Car('Audi', 'GerAudi', 2023, 300, 50);

car.drive();
car.info();
car.increaseMaxSpeed(20);
car.addDriver(this.driver);
car.changeYear(this.year);

console.log(car);




