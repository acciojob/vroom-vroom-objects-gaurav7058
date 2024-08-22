// Car constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Method added to the Car prototype
Car.prototype.getMakeModel = function() {
    return this.make + ' ' + this.model;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    // Inherit properties from Car
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit the Car prototype in the SportsCar prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Method added to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed + ' km/h';
};

// Example usage
const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getMakeModel()); // Outputs: "Toyota Corolla"

const mySportsCar = new SportsCar('Ferrari', 'Testarossa', "200 km/h");
console.log(mySportsCar.getMakeModel()); // Outputs: "Ferrari 488"
console.log(mySportsCar.getTopSpeed()); // Outputs: "330 km/h"
