"use strict";
class Motorcycle {
    constructor(name, release, color) {
        this.name = name;
        this.release = release;
        this.color = color;
    }
    vehicleType() {
        console.log(`Merek Kendaraan : ${this.name}, Waktu rilis : ${this.release}, Warna Kendaraan : ${this.color}`);
    }
}
class Car extends Motorcycle {
    constructor(name, release, color) {
        super(name, release, color);
    }
}
const Beat = new Motorcycle("Beat", 2010, "read");
const Fortuner = new Car("Forutner", 2015, "white");
Beat.vehicleType();
Fortuner.vehicleType();
// 3. looping data array
let users;
users = [
    { name: 'John', age: 20, job: 'Writer' },
    { name: 'Doe', age: 22, job: 'Writer' },
    { name: 'Don', age: 21, job: 'Coder' },
];
users.forEach((value) => {
    const { name, age, job } = value;
    console.log(`${name} : ${age} : ${job}`);
});
