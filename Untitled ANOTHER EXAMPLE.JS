
class Car {
 
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

 
  displayInfo() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }

 
  accelerate(speedIncrease) {
    this.speed += speedIncrease;
    console.log(`Accelerating! Current Speed: ${this.speed} mph`);
  }

 
  brake(speedDecrease) {
    this.speed = Math.max(0, this.speed - speedDecrease);
    console.log(`Braking! Current Speed: ${this.speed} mph`);
  }
}


var myCar = new Car("Toyota", "Camry", 2022);


console.log(myCar.make);  
console.log(myCar.model);
console.log(myCar.year);  


myCar.displayInfo();    


myCar.accelerate(30);     
myCar.brake(10);         
