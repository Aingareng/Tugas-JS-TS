// 2. Membuat Class,interface,inhertence dan implements
interface vehicle {
  name: string,
  release: number,
  color: string,

}
class Motorcycle implements vehicle {
  name: string;
  release: number;
  color: string;


  constructor(name: string, release: number, color: string) {
    this.name = name
    this.release = release
    this.color = color
  }
  vehicleType(): void {
    console.log(`Merek Kendaraan : ${this.name}, Waktu rilis : ${this.release}, Warna Kendaraan : ${this.color}`)
  }
}
class Car extends Motorcycle {

  constructor(name: string, release: number, color: string) {
    super(name, release, color)
  }
}

const Beat = new Motorcycle("Beat", 2010, "read")
const Fortuner = new Car("Forutner", 2015, "white")
Beat.vehicleType()
Fortuner.vehicleType()




// 3. looping data array
let users: any[];
users = [
  { name: 'John', age: 20, job: 'Writer' },
  { name: 'Doe', age: 22, job: 'Writer' },
  { name: 'Don', age: 21, job: 'Coder' },
]

users.forEach((value: any): void => {
  const { name, age, job } = value
  console.log(`${name} : ${age} : ${job}`);

})





